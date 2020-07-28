import { EventSource } from 'OpenSeadragon'

export default () =>
  Object.assign(Object.create(EventSource.prototype), {
    events: {},
    mode: 'MOVE',
    zoom: 1,
    width: 0,
    height: 0,
    imageWidth: 0,
    imageHeight: 0,
    pixelRatio: 1,
    drawingId: '',
    addAnnotationCallback: null,
    clickAnnotationCallback: null,
    addMarkersCallback: null,
    delMarkersCallback: null,
    annotations: {},
    markers: {},
    markerLines: {},
    style: {
      type: 'polyline', // type: polyline, polygon, line, ellipse, rect, path (default), measureDistance, measureArea
      color: 'red',
      fill: 'none',
      width: 3,
    }
  })
