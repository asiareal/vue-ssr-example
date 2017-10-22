# demo7 Bundle Renderer 的构建配置

之前demo通过require直接饮用打包的代码存在两个问题：
1. 报错不友好，无法使用source map无法追踪到报错的位置。
2. 凡是修改代码都要重新打包，重启server，严重影响开发效率。

`vue-server-renderer` 提供一个名为 `createBundleRenderer` 的 API 用于解决这个问题。
通过`vue-server-renderer/client-plugin`和`vue-server-renderer/server-plugin` 两个webpack插件分别对客户端和服务端打包出特殊的json文件，
配合`createBundleRenderer` 来解决以上问题。

本例子参照官网给出的例子实现支持source map，以及热重载的支持实现。

page2加载过程中会抛出一个错，来检验在客户端和服务端的source map 支持。


