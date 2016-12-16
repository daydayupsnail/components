# 组件库
已经有的组件有弹窗，
持续更新中。。。

## 代码结构
依据requirejs，搭建整体项目。每个子项目的main模块，在index.html
里<br/>
com是每个子项目的公共部分<br/>
widget是组件基类

>### 弹窗
>弹窗实现了，简单弹窗，alert，confirm，prompt 4种方式。
>使用了观察者模式，实现事件订阅。
>js结构搭建完成，没有加入css。 稍后将会加上 对属性的监听。


### hoverbox
绑定hover的元素，很容易出现抖动，mouseleave触发次数不对等等。
hoverbox，给绑定事件的元素，增加了data-changeState，通过判定参数来防止抖动。

### 放大
为了方便ie7也能实现放大，用js写了一个。没用css3动画。
依赖于hoverbox



