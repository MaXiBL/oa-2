const merge = require('webpack-merge')
const baseconfig = require('./webpack.base.conf')

module.exports = merge(baseconfig, {
  mode: 'production',
  output: {
    filename: 'annotation.min.js',
    library: 'annotation',
    libraryTarget: 'commonjs2'
  },
  externals: {
    // 在webpack 中, 从npm包中搜索 openseadragon
    OpenSeadragon: 'openseadragon',
  }
})