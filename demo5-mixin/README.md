# demo5-mixin 数据预取和状态——匹配要渲染的视图后，再获取数据 & Store 代码拆分(Store Code Splitting)

## 匹配要渲染的视图后，再获取数据
本例子参照官网第二种数据预取方案，匹配要渲染的视图后，再获取数据。利用mixin向vue组件生命周期钩子`beforeMount`，执行`asyncData`。

给人的体验我觉得不错，没有卡顿感。但是当路由组件重用（同一路由，但是 params 或 query 已更改，例如，从 user/1 到 user/2）时，也应该调用 `asyncData` 函数。
这是还要借助组件内的路由钩子来实现操作，这时有时第一种方案的操作体验，卡顿感又会出现。操作体验不一致。这让人感觉更差。

除此之外，服务端获取数据后，浏览器端渲染时候还会再请求一次。

所以，我认为[在路由导航之前解析数据](../demo5) + loading 的方案是目前vue数据预取的最好方案。

## Store 代码拆分(Store Code Splitting)

本例子采用store.registerModule 惰性注册(lazy-register)，对store代码做了拆分，这样的好处store代码会对应打包到不同的业务组件中。真正做到store代码的按需加载。
但是在使用过程中，发现快速切换时候控制台会出现报错，具体原因未知。
