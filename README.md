# 组件库
持续更新中。。。

## 代码结构
依据requirejs，搭建整体项目。每个子项目的main模块，在index.html
里<br/>
com是每个子项目的公共部分<br/>
widget是组件基类
为了提升组件的可复用性，减少或者独立ui方面的控制。


### hoverbox
绑定hover的元素，很容易出现抖动，mouseleave触发次数不对等等。
hoverbox，给绑定事件的元素，增加了data-changeState，通过判定参数来防止抖动。

### 放大
[demo](zoom/index.html)
为了方便ie7也能实现放大，用js写了一个。没用css3动画。从中心放大。
依赖于hoverbox

### 轮播单个
[demo](carousel_single/index.html)
实现单个轮播，鼠标悬停
兼容到ie7

### 轮播整体
[demo](carousel_whole/index.html)
实现整体轮播，鼠标悬停，自动播放可控，继承重写切换效果
兼容到ie7

### 




