const path = require('path')
const portfinder = require('portfinder')
const address = require('address')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const chalk = require('chalk')

const  serveConfig = {
  mode: 'development',
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    host: '0.0.0.0',
    port: 8000,
    clientLogLevel: 'error',
    quiet: true
  },
  plugins: []
}

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = 8000,
  portfinder.getPort((error, port) => {
    if (error) {
      reject(error)
    } else {
      serveConfig.devServer.port = port
      serveConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [            
            `Your application is running here: ${chalk.blue(`http://${serveConfig.devServer.host}:${port}`)}`,
            `Your application is running here: ${chalk.blue(`http://${address.ip()}:${port}`)}`
          ],
        }
      }))
      resolve(serveConfig)
    }
  })
})