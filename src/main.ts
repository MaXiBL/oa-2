import { Rect } from 'OpenSeadragon'
import { h, render } from 'preact'
import Overlay from './views/Overlay'
import createDispatcher from './model/createDispatcher'
import generalActions from './model/generalActions'
import createModel from './model/createModel'
import './assets/styles/index.less'

const annotationsPrototype: object = {
  onOpen(): void {
    this.overlay = render(h(Overlay, { dispatch: this.dispatch, model: this.model }), document.body)
    const homeBounds: { width: number, height: number} = this.viewer.world.getHomeBounds()
    const zoom: number = this.viewer.viewport.getZoom()
    this.viewer.addOverlay(this.overlay, new Rect(0, 0, homeBounds.width, homeBounds.height, 0))
    const { width, height }: { width: number, height: number} = this.overlay.getBoundingClientRect()

    this.dispatch({
      type: 'INITIALIZE',
      zoom,
      width,
      height
    })
  },

  getAnnotations(): object {
    return this.model.annotations
  },

  setAnnotations(annotations: object): void {
    this.dispatch({ type: 'ANNOTATIONS_RESET', annotations })
  },

  cleanAnnotations(): void {
    this.dispatch({ type: 'ANNOTATIONS_RESET' })
  },

  getMarkers(): object {
    return this.model.markers
  },

  setMarkers(markers: object) {
    this.dispatch({ type: 'MARKERS_REST', markers })
  },

  getMarkerLines(): void {
    return this.model.markerLines
  },

  setMarkerLines(markerLines: object): void {
    this.dispatch({ type: 'MARKERLINES_REST', markerLines })
  },

  getMode(): void {
    return this.model.mode
  },

  setMode(mode: object): void {
    this.dispatch({ type: 'MODE_UPDATE', mode })
  },

  getStatus(): object {
    return { active: !!this.overlay }
  },

  setStyle(style: { type?: string, color?: string, width?: number, fill?: string }) {
    if (!style) {
      style = {}
    }
    if (style.type) {
      this.model.style.type = style.type
    }
    if (style.color) {
      this.model.style.color = style.color
    }
    if (style.width) {
      this.model.style.width = style.width
    }
    if (style.fill) {
      this.model.style.fill = style.fill
    }
  },

  onStartDraw(style: { type?: string, color?: string, width?: number, fill?: string }): void {
    this.setStyle(style)
    this.dispatch({ type: 'MODE_UPDATE', mode: 'DRAW' })
  },

  onStopDraw(): void {
    this.dispatch({ type: 'MODE_UPDATE', mode: 'MOVE' })
  },

  setClickAnnotationCallback(cb: object): void {
    this.model.clickAnnotationCallback = cb
  },

  setAddAnnotationCallback(cb: object): void {
    this.model.addAnnotationCallback = cb
  },

  setAddMarkersCallback (cb: object): void {
    this.model.addMarkersCallback = cb
  },

  setDelMarkersCallback(cb: object): void {
    this.model.delMarkersCallback = cb
  },

  cleanMarkers(): void {
    this.model.markers = {}
    this.model.markerLines = {}
  },

  setImageConfig(imageWidth: number, imageHeight: number, pixelRatio: number): void {
    this.model.imageWidth = imageWidth
    this.model.imageHeight = imageHeight,
    this.model.pixelRatio = pixelRatio
  },
}
interface ParameterObject {
  viewer: any,
  imageHeight: number,
  imageWidth: number,
  pixelRatio: number
}
export default {
  init: ({ viewer, imageHeight, imageWidth, pixelRatio }: ParameterObject) => {
    const model = createModel()
    // 把图片实际尺寸赋值给Model
    model.imageHeight = imageHeight
    model.imageWidth = imageWidth
    model.pixelRatio = pixelRatio
    const dispatch = createDispatcher(model, generalActions)
    const annotations = Object.create(annotationsPrototype)
    Object.assign(annotations, { viewer, model, dispatch })
    viewer.addHandler('open', () => annotations.onOpen())
    viewer.addHandler('zoom', ({ zoom }: { zoom: number}) => annotations.dispatch({ type: 'ZOOM_UPDATE', zoom }))
    if (viewer.isOpen()) { annotations.onOpen() }
    return annotations
  }
}
