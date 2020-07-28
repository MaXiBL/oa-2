# OpenSeadragon 标注插件 annotation

## 使用步骤

### 下载

$ git clone git@gitlab.com:Thomas365/openseadragon-annotations-2.git

### 安装依赖包,初始化开发环境

$ yarn install 或 npm install (推荐 yarn)

### 开发

开启示例: $ yarn run serve 或 $ npm run serve
构建插件: $ yarn run dev 或 $ npm run dev

## 构建生成环境插件

$ yarn run build 或 $ npm run build

## 使用

### 使用链接引入

链接引入 annotation.js, 因为插件依赖 openseadragon, 所以 opensaeadragon 需要提前引入
<!-- <srcipt src="./annotation.js"></script> -->

### 使用 es6 import 引入

把 annotation.min.js 添加到项目中
引入时需要安装 openseadragon 包, $ yarn add openseadragon 或 $ npm install openseadragon
<!-- import Annotation from annotation -->

### 页面中使用

viewer = OpenSeadragon({
  ...
})
<!-- 使用链接引入的需要加 default -->
Annotation.default({
  viewer,
  imageHeight: 197226,
  imageWidth: 96651,
  pixelRatio: 0.2
})
<!-- 使用 import 引入的不需要加 default -->
Annotation({
  viewer,
  imageHeight: 197226,
  imageWidth: 96651,
  pixelRatio: 0.2
})
