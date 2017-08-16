# vue ssr 服务器端渲染例子

*最近在学习vue ssr，官方文档有的地方未给出实际例子，我将学习过程做的一些demo整理了一下，汇集于此，可供大家参考*

```bash
$ git clone ...
$ cd vue-ssr-exapmple
$ npm install
```

## demo1-基本例子

```bash
$ npm run demo1
```
ssr与服务器集成的基本例子，对应[官方文档](https://ssr.vuejs.org/zh/basic.html)

## demo2-组件生命周期钩子函数

```bash
$ npm run demo2
```
vue组件在服务器端渲染，生命周期钩子函数执行情况，对应[官方文档](https://ssr.vuejs.org/zh/universal.html)

## demo3-源码结构

```bash
$ npm run demo3
```
利用webpack打包的一个基本的源码结构, 对应[官方文档](https://ssr.vuejs.org/zh/structure.html)

参照模式：

![打包](assets/images/build.png)
