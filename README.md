# 组件库
在实战中，总结的js组件库，严格分离css，专注于实现js功能。
将ui表现与组件核心结构分离，可继承复写ui。
持续更新中。。。

## 代码结构
依据requirejs，搭建整体项目。
com是每个子项目的公共部分<br/>
widget是组件基类

### hoverbox
绑定hover的元素，很容易出现抖动，mouseleave触发次数不对等等。
hoverbox，给绑定事件的元素，增加了data-changeState，通过判定参数来防止抖动。

### 放大
[demo](https://daydayupsnail.github.io/components/zoom/index.html)
[使用说明](https://daydayupsnail.github.io/jscomponents/component-zoombox/)
为了方便ie7也能实现放大，用js写了一个。没用css3动画。从中心放大。
依赖于hoverbox

### 轮播单个
[demo](https://daydayupsnail.github.io/components/carousel_single/index.html)
[使用说明](https://daydayupsnail.github.io/jscomponents/component-carousel-single/)
实现单个轮播，鼠标悬停
修复闪烁的bug，详情见使用说明

### 轮播整体
[demo](https://daydayupsnail.github.io/components/carousel_whole/index.html)
[使用说明](https://daydayupsnail.github.io/jscomponents/component-carousel-whole/)
实现整体轮播，鼠标悬停，自动播放可控，继承重写切换效果
修复闪烁的bug，详情见使用说明

### 回到顶部
[demo](https://daydayupsnail.github.io/components/scrolltotop/index.html)
[使用说明](https://daydayupsnail.github.io/jscomponents/component-scrolltotop/)
给页面绑定滚动事件
当页面滚下第一屏，显示回到顶部的按钮。否则影藏

### 分页导航
[demo](https://daydayupsnail.github.io/components/pagination/index.html)
[使用说明](https://daydayupsnail.github.io/jscomponents/component-pagination/)
根据页面的数量，动态生成导航。支持每次点击切换页面的回调。

## 兼容性
所有js代码，兼容到ie7。
css效果，少量不兼容。
例如： 
:last-child 要么引用其他selectivizr等js库解决问题;要么直接给最后一个元素，绑定.last ,赋值和:last-child相同的css定义。

