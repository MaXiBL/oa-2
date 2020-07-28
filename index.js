const $ = require('jquery')
$(function(){
  var sourceList = [
    './tiles/output/01.dzi',
    '//openseadragon.github.io/example-images/highsmith/highsmith.dzi',
    '//openseadragon.github.io/example-images/pnp/pan/6a32000/6a32400/6a32487.dzi'              
  ]
  var sourceIndex = 0
  var annotationObj = null
  var isDrawing = false
  var brightness = 1
  var contrast = 1
  const viewer = initViewer('seadragon')
  console.log(1,viewer)
  viewer.addHandler('open', () => {
    // 计算初始的zoom
    var maxLevel = viewer.source.maxLevel
    var imageWidth = viewer.source.width
    var imageHeight = viewer.source.height
    var containerWidth = viewer.element.offsetWidth
    var containerHeight = viewer.element.offsetHeight
    var minZoom = 0
    var maxZoom
    for (var i=0; i <= maxLevel; i++) {
      var contentWidth = imageWidth / Math.pow(2, maxLevel - i)
      var zoom = contentWidth / containerWidth
      if (zoom > 1) {
        maxZoom = zoom
      } else {
        minZoom = zoom
      }
    }
    viewer.viewport.zoomTo(minZoom - 0.0011)
    console.log(minZoom, maxZoom)
  })
  loadImage(sourceList[sourceIndex])
  // 初始化图片容器
  function initViewer (id) {              
    return window.OpenSeadragon({
      id: id,
      showNavigator: true,
      navigatorPosition: 'BOTTOM_RIGHT',                
      degrees: 0,
      showZoomControl: false,
      showHomeControl: false,
      showFullPageControl: false,
      showRotationControl: false,               
      gestureSettingsMouse: {
        dblClickToZoom: true,
        clickToZoom: false,
        // scrollToZoom: false
      },
      // minPixelRatio: 1,
      // minZoomImageRatio: 1,
      // maxZoomPixelRatio: 1,
      // visibilityRatio: 1,
      minZoomLevel: 0,
      // debugMode: true,
      autoResize: false,
      // useCanvas: false,
      preserveImageSizeOnResize: true,
      smoothTileEdgesMinZoom: 'Infinity',
      crossOriginPolicy: 'Anonymous',
      // minScrollDeltaTime: 200
      // ajaxWithCredentials: true,
      // loadTilesWithAjax: true,
      // ajaxHeaders: {
      //   // 'Content-Type': 'application/octet-stream charset=utf-8',
      //   'Authorization': 'Basic YnJvd3NlcjoxMjM='
      // }
    })
  }
  // 加载图片
  function loadImage(image){
    viewer.open(image)    
    // 初始化标注对象
    if(!annotationObj){                
      annotationObj = window.Annotation.default.init({
        viewer,
        imageHeight: 197226,
        imageWidth: 96651,
        pixelRatio: 0.2
      }) 
      annotationObj.setClickAnnotationCallback((annotationId) => {
        console.log(annotationId)
      })
      annotationObj.setDelMarkersCallback((annotationId) => {
        console.log(annotationId)
      })
      
      viewer.addHandler('zoom', function (e) {
        console.log(555, e)
        getScale(e.zoom)
        if (e.zoom < 0.559) {
          viewer.viewport.zoomTo(0.559)
        } else if (e.zoom > 71.68) {
          viewer.viewport.zoomTo(71.68)
        } else {
          // 
        }
        
      })
      viewer.addHandler('canvas-double-click', function(e) {
        console.log(444,e)
      })
      viewer.addHandler('canvas-scroll', function(e) {
        console.log(11, e)
        const rePoint = viewer.viewport.pointFromPixel(e.position, true)
        const zoom = viewer.viewport.getZoom()
        console.log(22, rePoint, zoom)
        if (e.scroll === 1) {
          viewer.viewport.zoomTo(zoom * 2, rePoint, false)
        } else {
          viewer.viewport.zoomTo(zoom / 2, rePoint, false)
        }
      })
      // viewer.addHandler('pan', function (e) {
      //   console.log('移动',e)
      // })
    } else {
      annotationObj.cleanAnnotations()
      annotationObj.cleanMarkers()
    }
  }    
  // 计算比例尺
  function getScale (zoom) {
    // 获取切片宽度
    var scaleList = [1, 2, 5, 10, 20, 30, 50, 100, 1500, 300, 500]
    var image_width = viewer.viewport._contentSize.x
    var svg_width = viewer.viewport.containerSize.x * zoom
    var scale = image_width/svg_width
    scaleList.sort(function (a, b) {
      return Math.abs(a - scale) - Math.abs(b - scale)
    })
    var scale_Final = scaleList[0]
    var scale_coeff
    if ( scale_Final / scale > 1) {
      scale_coeff = 50
    } else {
      scale_coeff = 100
    }
    const scale_width = (scale_Final / scale) * scale_coeff
    $('.scale-container').css('width', scale_width)
    $('.scale-title').html(Math.round(scale_Final * scale_coeff)+'um')
  }    
  // 图片滤镜
  function filterImage(brightness, contrast) {
    $('#seadragon canvas').css('filter', `brightness(${brightness}) contrast(${contrast})`)
  }
  // 开始标注或停止标注
  $('.btn-draw').on('click', function() {
    if (isDrawing) {
      annotationObj.onStopDraw()
      isDrawing = false
    } else {
      annotationObj.onStartDraw()
      isDrawing = true
    }     
  })
  // 选择标注图形
  $('#select-shape').on('change', function() {    
    annotationObj.setStyle({ type: $(this).val()})
  })
  // 选择标注颜色
  $('#select-color').on('change', function() {
    annotationObj.setStyle({ color: $(this).val()})
  })
  // 选择画笔
  $('#select-pencil').on('change', function() {
    annotationObj.setStyle({ width: $(this).val()})
  })
  // 选择缩放倍数
  $('#select-zoom').on('change', function() {
    if ($(this).val() === 'home') {
      viewer.viewport.zoomTo(0.559)
    } else {
      viewer.viewport.zoomTo($(this).val())
    }
  })
  // 调整图片亮度
  $('#brightness').on('mousemove', function() {
    brightness = $(this).val()
    filterImage(brightness, contrast)
  })
  // 调整图片对比度
  $('#contrast').on('mousemove', function() {
    contrast = $(this).val()
    filterImage(brightness, contrast)
  })
  // 选择上一张图片
  $('.btn-pre').on('click', function() {
    if(sourceIndex === 0) {
      alert('没有上一张')
    }else{
      loadImage(sourceList[--sourceIndex])
    }
  })
  // 选择下一张图片
  $('.btn-next').on('click', function() {
    if(sourceIndex === sourceList.length -1) {
      alert('没有下一张')
    }else{
      loadImage(sourceList[++sourceIndex])
    }
  })
  // 清除标注
  $('.btn-clearAnnotation').on('click', function() {
    annotationObj.onStartDraw({ type: 'measureArea', color: '#498FF9' })
    const markers = []
    markers.push('1', [
      'span',
      '',
      '1000'
    ])
    annotationObj.setMarkers(markers)
    // annotationObj.cleanAnnotations()
  })
  // 增加标记线
  $('.btn-add-markLine').on('click', () => {
    const annotationId = '5c094cb5-c941-f561-8fc1-9d67c9f15e5d'
    annotationObj.setMarkerLines({
      annotationId: [
        'polygon',
        {
          id: `measureArea_${annotationId}`,
          annotationId,
          type: 'measureArea',
          points: '30,60 50,50 20,30',
          stroke: 'red',
          fill: 'none',
          'stroke-width': 3
        }
      ],
      'sdfhasdkfjh': [
        'line',
        {
          id: 'measureDistance_sdfhasdkfjh',
          annotationId: 'sdfhasdkfjh',
          type: 'measureDistance',
          x1: '20',
          y1: '20',
          x2: '60',
          y2: '70',
          stroke: 'red',
          fill: 'none',
          'stroke-width': 3
        }
      ]
    })
  })
})