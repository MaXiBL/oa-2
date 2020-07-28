/**
 * webpack 基础配置
 * 版本: webpack 4.35.3
 */

// const webpack = require('webpack')
const path = require('path')

module.exports = {
  // mode: 'development',
  entry: path.resolve(__dirname, '../src/main.ts'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: 'annotation.js',
    // library: 'annotation',
    // libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.jsx', '.css', '.less']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              // plugins: ['@babel/plugin-transform-runtime']
            }
          },
          {
            loader: 'eslint-loader'            
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
            },
          },
        ],
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]  
      }
    ]
  }
}