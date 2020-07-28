const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: 'annotation.js',
    library: ['Annotation'],
    libraryTarget: 'window'
  },
  externals: {
    // 在浏览器中,需要在全局中搜索变量 'OpenSeadragon'
    OpenSeadragon: 'OpenSeadragon',
  },
  devtool: 'source-map',
  target: 'web',
  plugins: []
})
