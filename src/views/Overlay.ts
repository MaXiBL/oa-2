import { h, Component } from 'preact'

interface StringObject {
  [prop: string]: any
}
function ObjectToArray(type: string, ...objArr: StringObject[]): StringObject[] {
  let arr: object[] = []
  if (type === 'annotation') {
    objArr.forEach((obj) => {
      if (obj) {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            arr.push(obj[key])
          }
        }
      }
    })
  } else {
    objArr.forEach((obj) => {
      if (obj) {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            arr = arr.concat(obj[key])
          }
        }
      }
    })
  }
  arr = arr.sort((a: any[], b: any[]) => {
    return Number(a[1].annotationId > b[1].annotationId)
  })
  return arr
}

class Overlay extends Component {
  private renderElement: any
  private onMouseDown: any
  private onMouseUp: any
  private onMouseMove: any
  private onMouseLeave: any
  public state: any
  public props: any

  public constructor(...args: any[]) {
    super(...args)
    this.renderElement = (el: [string, object]) => h(...el)
    this.onMouseDown = (e: any): void => {
      if (this.state.mode !== 'MOVE') {
        if (e.button === 0) {
          e.stopPropagation()
          const point: any = this.calculateCoords(e)
          this.props.dispatch({ type: 'PRESS', x: point.x, y: point.y })
          this.base.style.cursor = 'pointer'
        }
      }
    }
    this.onMouseUp = (e: any): void => {
      if (this.state.mode !== 'MOVE') {
        e.stopPropagation()
        const point: any = this.calculateCoords(e)
        this.props.dispatch({ type: 'RELEASE', x: point.x, y: point.y })
      }
      this.base.style.cursor = 'default'
    }
    this.onMouseMove = (e: any): void => {
      if (this.state.mode !== 'MOVE') {
        e.stopPropagation()
        const point: any = this.calculateCoords(e)
        this.props.dispatch({ type: 'MOVE', x: point.x, y: point.y })
      }
    }
    this.onMouseLeave = (e: any): void => {
      if (this.state.mode !== 'MOVE') {
        e.stopPropagation()
        const point: any = this.calculateCoords(e)
        this.props.dispatch({ type: 'LEAVE_CANVAS', x: point.x, y: point.y })
      }
      this.base.style.cursor = 'default'
    }
  }

  private calculateCoords(e: any): object {
    const rect: any = this.base.getBoundingClientRect()
    const offsetX: number = e.clientX - rect.left
    const offsetY: number = e.clientY - rect.top
    return {
      x: Math.round(offsetX / rect.width * 10000) / 100,
      y: Math.round(offsetY / rect.height * 10000) / 100
    }
  }

  public getInitialState(): any {
    return this.props.model
  }

  public componentDidMount(): void {
    this.props.model.addHandler('CHANGE_EVENT', () => {
      this.setState(this.props.model)
    })
  }

  public render() {
    let divAttr: {
      id: string,
      width: string,
      height: string,
      style: string,
      onPointerDown?: any,
      onPointerUp?: any,
      onMouseDown?: any,
      onMouseUp?: any
      onMouseLeave: any,
      onMouseMove: any
    }
    if (window.onpointerdown === null) {
      divAttr = {
        id: 'svg_wrapper',
        width: '100%',
        height: '100%',
        style: '',
        onPointerDown: this.onMouseDown,
        onPointerUp: this.onMouseUp,
        onMouseLeave: this.onMouseLeave,
        onMouseMove: this.onMouseMove
      }
    } else {
      divAttr = {
        id: 'svg_wrapper',
        width: '100%',
        height: '100%',
        style: '',
        onMouseLeave: this.onMouseLeave,
        onMouseMove: this.onMouseMove,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp
      }
    }

    return h(
      'div',
      divAttr,
      h(
        'svg',
        {
          id: 'svg',
          xmlns: 'http://www.w3.org/2000/svg',
          version: '1.1',
          preserveAspectRatio: 'none',
          viewBox: '0 0 100 100',
          width: '100%',
          height: '100%'
        },
        ObjectToArray('annotation', this.state.annotations, this.state.markerLines).map((el) => this.renderElement(el))
      ),
      ObjectToArray('marker', this.state.markers).map((el) => this.renderElement(el))
    )
  }
}

export default Overlay
