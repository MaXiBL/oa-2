const path = require('path')
const sharp = require('sharp')

function FormatImage(inputName, outputName) {
  sharp(path.join(__dirname, inputName))
    .limitInputPixels(1024 * 1024 * 1024 * 6) // 6GB
    .jpeg()
    .tile({
      size: 512,
      overlap: 0,
      angle: 0,
      container: 'fs',
      layout: 'dz',
    })
    .toFile(path.join(__dirname, outputName), (err, info) => {
      if (err) throw err
      console.log(info)
    })
}

// FormatImage('./tiles/origin/01.tif', './tiles/output/01')
FormatImage('./tiles/origin/02.tif', './tiles/output/02')
