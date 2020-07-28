const createGuid = (): string => {
  let guid = ''
  for (let i = 1; i <= 32; i++) {
    guid += Math.floor(Math.random() * 16.0).toString(16)
    if ((i === 8) || (i === 12) || (i === 16) || (i === 20)) {
      guid += '-'
    }
  }
  return guid
}

const reactToGeneralAction = (model: any) => {
  const clearMeasure = (e: any): void => {
    e.stopPropagation()
    const annotationId = e.target.attributes.annotationId.value
    // 删除前执行回调
    if (model.delMarkersCallback) {
      model.delMarkersCallback(model.markerLines[annotationId])
    }
    delete model.markers[annotationId]
    delete model.markerLines[annotationId]
    // 需要重绘
    model.raiseEvent('CHANGE_EVENT')
  }
  const clickAnnotation = (e: any): void => {
    e.stopPropagation()
    const annotationId = e.target.attributes.annotationId.value
    if (model.clickAnnotationCallback) {
      model.clickAnnotationCallback(annotationId)
    }
  }
  return (action: any): void => {
    switch (action.type) {
    case 'INITIALIZE':
      model.zoom = action.zoom
      model.width = action.width
      model.height = action.height
      break

    case 'ZOOM_UPDATE':
      model.zoom = action.zoom
      break

    case 'MODE_UPDATE':
      model.drawingId = ''
      if (model.mode !== action.mode) {
        model.mode = action.mode
      }
      break

    case 'ANNOTATIONS_RESET':
      model.drawingId = ''
      model.annotations = action.annotations || {}
      break

    case 'MARKERS_REST':
      model.drawingId = ''
      if (action.markers) {
        for (const annotationId in action.markers) {
          if (action.markers.hasOwnProperty(annotationId)) {
            model.markers[annotationId] = action.markers[annotationId]
          }
        }
      }
      break

    case 'MARKERLINES_REST':
      model.drawingId = ''
      // 测距和测面积,自动加上删除按钮
      if (action.markerLines) {
        model.markerLines = action.markerLines
        for (const annotationId in action.markerLines) {
          if (action.markerLines.hasOwnProperty(annotationId)) {
            // 测距
            if (action.markerLines[annotationId][0] === 'line') {
              // x1, y1, x2, y2 必须是数字
              const flag = typeof (Number(action.markerLines[annotationId][1].x1)
                         + Number(action.markerLines[annotationId][1].y1)
                         + Number(action.markerLines[annotationId][1].x2)
                         + Number(action.markerLines[annotationId][1].y2)) === 'number'
              if (!flag) {
                return
              }
              if (!model.markers[annotationId]) {
                model.markers[annotationId] = []
              }
              let translate
              if (action.markerLines[annotationId][1].x2 >= action.markerLines[annotationId][1].x1) {
                translate = 'translate(8px, -8px)'
              } else {
                translate = 'translate(-24px, -8px)'
              }
              // 起始圆点
              model.markers[annotationId].push([
                'div',
                {
                  id: `startPoint_${annotationId}`,
                  annotationId,
                  class: 'start-point',
                  style: {
                    top: `${action.markerLines[annotationId][1].y1}%`,
                    left: `${action.markerLines[annotationId][1].x1}%`,
                    'background-color': action.markerLines[annotationId][1].stroke || 'red'
                  }
                }
              ])
              // 结束圆点
              model.markers[annotationId].push([
                'div',
                {
                  id: `endPoint_${annotationId}`,
                  annotationId,
                  class: 'end-point',
                  style: {
                    top: `${action.markerLines[annotationId][1].y2}%`,
                    left: `${action.markerLines[annotationId][1].x2}%`,
                    'background-color': action.markerLines[annotationId][1].stroke || 'red'
                  }
                }
              ])
              model.markers[annotationId].push([
                'div',
                {
                  id: `close_${annotationId}`,
                  annotationId,
                  class: 'icon-close',
                  style: {
                    top: `${action.markerLines[annotationId][1].y2}%`,
                    left: `${action.markerLines[annotationId][1].x2}%`,
                    transform: translate,
                  },
                  onClick: clearMeasure,
                  onMouseDown: clearMeasure
                }
              ])
            } else {
              // 测面积
              const points = action.markerLines[annotationId][1].points.split(' ')
              if (points.length < 3) {
                return
              }
              if (!model.markers[annotationId]) {
                model.markers[annotationId] = []
              }
              const position = {
                x: points[0].split(',')[0],
                y: points[0].split(',')[1]
              }
              if (action.y <= 0) {
                position.y = 2
              }
              if (action.y >= 100) {
                position.y = 98
              }
              if (action.x <= 0) {
                position.x = 2
              }
              if (action.x >= 100) {
                position.x = 98
              }
              model.markers[annotationId].push([
                'div',
                {
                  id: `close_${annotationId}`,
                  annotationId,
                  class: 'icon-close',
                  style: {
                    top: `${position.y}%`,
                    left: `${position.x}%`
                  },
                  onClick: clearMeasure,
                  onMouseDown: clearMeasure
                }
              ])
            }
          }
        }
      } else {
        model.markerLines = {}
      }
      break

    case 'PRESS':
      if (model.mode === 'DRAW') {
        model.drawingId = createGuid()
        const annotationId = model.drawingId
        switch (model.style.type) {
        case 'measureDistance':
          model.markers[annotationId] = []
          // 显示距离
          model.markers[annotationId].push([
            'span',
            {
              id: `tip_${annotationId}`,
              annotationId,
              class: 'measure-tip',
              start: {
                x: action.x,
                y: action.y,
              },
              'background-color': model.style.color || 'red'
            },
            ''
          ])
          // 起始圆点
          model.markers[annotationId].push([
            'div',
            {
              id: `startPoint_${annotationId}`,
              annotationId,
              class: 'start-point',
              style: {
                top: `${action.y}%`,
                left: `${action.x}%`,
                'background-color': model.style.color || 'red'
              }
            }
          ])
          // 结束圆点
          model.markers[annotationId].push([
            'div',
            {
              id: `endPoint_${annotationId}`,
              annotationId,
              class: 'end-point',
              style: {
                top: `${action.y}%`,
                left: `${action.x}%`,
              },
              'background-color': model.style.color || 'red'
            }
          ])
          // 测量尺子
          model.markerLines[annotationId] = [
            'line',
            {
              id: `meameasureDistance_${annotationId}`,
              annotationId,
              type: 'measureDistance',
              x1: action.x,
              y1: action.y,
              x2: action.x,
              y2: action.y,
              stroke: model.style.color || 'red',
              'stroke-width': model.style.width || 3,
            }
          ]
          break
        case 'measureArea':
          model.markerLines[annotationId] = [
            'polyline',
            {
              id: `measureArea_${annotationId}`,
              annotationId,
              type: 'measureArea',
              points: `${action.x},${action.y}`,
              stroke: model.style.color || 'red',
              fill: model.style.fill || 'none',
              'stroke-width': model.style.width || 3,
              onMouseDown: clickAnnotation
            }
          ]
          break
        case 'polyline':
          model.annotations[annotationId] = [
            'polyline',
            {
              id: `polyline_${annotationId}`,
              annotationId,
              points: `${action.x},${action.y}`,
              stroke: model.style.color || 'red',
              fill: model.style.fill || 'none',
              'stroke-width': model.style.width || 3,
              onMouseDown: clickAnnotation
            }
          ]
          break
        case 'polygon':
          model.annotations[annotationId] = [
            'polygon',
            {
              id: `polygon_${annotationId}`,
              annotationId,
              points: `${action.x},${action.y}`,
              stroke: model.style.color || 'red',
              fill: model.style.fill || 'none',
              'stroke-width': model.style.width || 3,
              onMouseDown: clickAnnotation
            }
          ]
          break
        case 'line':
          model.annotations[annotationId] = [
            'line',
            {
              id: `line_${annotationId}`,
              annotationId,
              x1: action.x,
              y1: action.y,
              x2: action.x,
              y2: action.y,
              stroke: model.style.color || 'red',
              fill: model.style.fill || 'none',
              'stroke-width': model.style.width || 3,
              onMouseDown: clickAnnotation
            }
          ]
          break
        case 'ellipse':
          model.annotations[annotationId] = [
            'ellipse',
            {
              id: `ellipse_${annotationId}`,
              annotationId,
              cx: action.x,
              cy: action.y,
              rx: 0,
              ry: 0,
              stroke: model.style.color || 'red',
              fill: model.style.fill || 'none',
              'stroke-width': model.style.width || 3,
              onMouseDown: clickAnnotation
            }
          ]
          break
        case 'rect':
          model.annotations[annotationId] = [
            'rect',
            {
              id: `rect_${annotationId}`,
              annotationId,
              sx: action.x,
              sy: action.y,
              x: action.x,
              y: action.y,
              width: 0,
              height: 0,
              stroke: model.style.color || 'red',
              fill: model.style.fill || 'none',
              'stroke-width': model.style.width || 3,
              onMouseDown: clickAnnotation
            }
          ]
          break
        default:
          model.annotations[annotationId] = [
            'path',
            {
              id: `path_${annotationId}`,
              annotationId,
              d: `M${action.x} ${action.y}`,
              stroke: model.style.color || 'red',
              fill: model.style.fill || 'none',
              'stroke-width': model.style.width || 3,
              onMouseDown: clickAnnotation
            }
          ]
        }
      }
      break

    case 'MOVE':
      // 超过边界时不画
      if (action.x > 0 && action.x < 100 && action.y > 0 || action.y < 100) {
        if (model.mode === 'DRAW' && model.drawingId) {
          const lastAnnotation = model.annotations[model.drawingId]
          if (lastAnnotation) {
            switch (lastAnnotation[0]) {
            case 'polyline':
            case 'polygon':
              lastAnnotation[1].points += ` ${action.x},${action.y}`
              break
            case 'line':
              lastAnnotation[1].x2 = action.x
              lastAnnotation[1].y2 = action.y
              break
            case 'ellipse':
              lastAnnotation[1].rx = Math.abs(action.x - lastAnnotation[1].cx)
              lastAnnotation[1].ry = Math.abs(action.y - lastAnnotation[1].cy)
              break
            case 'rect':
              lastAnnotation[1].x = lastAnnotation[1].sx < action.x ? lastAnnotation[1].sx : action.x
              lastAnnotation[1].y = lastAnnotation[1].sy < action.y ? lastAnnotation[1].sy : action.y
              lastAnnotation[1].width = Math.abs(lastAnnotation[1].sx - action.x)
              lastAnnotation[1].height = Math.abs(lastAnnotation[1].sy - action.y)
              break
            default:
              lastAnnotation[1].d += ` L${action.x} ${action.y}`
            }
          } else {
            const lastMarker = model.markers[model.drawingId]
            const lastMarkerLine = model.markerLines[model.drawingId]
            // 判断是否有标记,有就是测距,没有就是测面积
            if (lastMarker) {
              const lastMarkerTip = lastMarker[0]
              const lastMarkerEndPoint = lastMarker[2]

              lastMarkerLine[1].x2 = action.x
              lastMarkerLine[1].y2 = action.y

              lastMarkerTip[1].style = `top: ${(lastMarkerLine[1].y1 + lastMarkerLine[1].y2) / 2}%;
                                      left: ${(lastMarkerLine[1].x1 + lastMarkerLine[1].x2) / 2}%;
                                      background-color: ${lastMarkerTip[1]['background-color']}`

              const x = Math.pow(Math.round((action.x - lastMarkerTip[1].start.x) * model.imageWidth * 0.01), 2)
              const y = Math.pow(Math.round((action.y - lastMarkerTip[1].start.y) * model.imageHeight * 0.01), 2)
              const z = Math.round(Math.sqrt(x + y) * model.pixelRatio)
              lastMarkerTip[2] = `${z}μm`
              lastMarkerEndPoint[1].style = `top: ${action.y}%;
                                            left: ${action.x}%;
                                            background-color: ${lastMarkerEndPoint[1]['background-color']}`
              } else {
                lastMarkerLine[1].points += ` ${action.x},${action.y}`
              }
          }
        }
      }
      break

    case 'RELEASE':
    case 'LEAVE_CANVAS':
      if (model.mode === 'DRAW' && model.drawingId) {
        const annotationId = model.drawingId
        const lastAnnotation = model.annotations[annotationId]
        model.drawingId = false
        if (lastAnnotation) {
          switch (lastAnnotation[0]) {
          case 'polyline':
          case 'polygon':
          case 'line':
          case 'ellipse':
          case 'rect':
          default:
            if (model.addAnnotationCallback) {
              model.addAnnotationCallback(lastAnnotation)
            }
            break
          }
        } else {
          const lastMarker = model.markers[annotationId]
          const lastMarkerLine = model.markerLines[annotationId]
          // 判断是否有标记,有就是测距,没有就是测面积
          if (lastMarker) {
            // 判断是否有距离
            if (lastMarker[0][2]) {
              let translate
              if (lastMarkerLine[1].x2 >= lastMarkerLine[1].x1) {
                translate = 'translate(8px, -8px)'
              } else {
                translate = 'translate(-24px, -8px)'
              }
              model.markers[annotationId].push([
                'div',
                {
                  id: `close_${annotationId}`,
                  annotationId,
                  class: 'icon-close',
                  style: {
                    top: `${lastMarkerLine[1].y2}%`,
                    left: `${lastMarkerLine[1].x2}%`,
                    transform: translate,
                  },
                  onClick: clearMeasure,
                  onMouseDown: clearMeasure
                }
              ])
              if (model.addMarkersCallback) {
                model.addMarkersCallback(lastMarkerLine)
              }
            } else {
              // 不保存
              delete model.markers[annotationId]
              delete model.markerLines[annotationId]
            }
          } else {
            // 判断测面积画的点数是否大于3
            if (lastMarkerLine[1].points.split(' ').length >= 3) {
              lastMarkerLine[0] = 'polygon'
              model.markers[annotationId] = []
              const position = {
                x: action.x,
                y: action.y
              }
              if (action.y <= 0) {
                position.y = 2
              }
              if (action.y >= 100) {
                position.y = 98
              }
              if (action.x <= 0) {
                position.x = 2
              }
              if (action.x >= 100) {
                position.x = 98
              }
              model.markers[annotationId].push([
                'div',
                {
                  id: `close_${annotationId}`,
                  annotationId,
                  class: 'icon-close',
                  style: {
                    top: `${position.y}%`,
                    left: `${position.x}%`
                  },
                  onClick: clearMeasure,
                  onMouseDown: clearMeasure
                }
              ])
              if (model.addMarkersCallback) {
                model.addMarkersCallback(lastMarkerLine)
              }
            } else {
              // 不保存
              delete model.annotations[annotationId]
            }
          }
        }
      }
      break

    default:
      break
    }
    model.raiseEvent('CHANGE_EVENT')
  }
}

export default reactToGeneralAction
