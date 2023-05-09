# shop-vue
一个vue.js的简单商城

## 数据接口
~~数据由mockjs搭配json-server生成随机数据模拟后台接口~~  
node爬取的网易严选的数码产品分类下的数据，没有把图片下载下来，直接使用的是网易严选的图片，若其删除则会造成无法获取到对应的图片。
mock-server/data文件夹下用来存放各类元数据,通过运行merge.js将数据合并到db.json内，作为服务数据。

## 用到的插件及工具
* 后台数据模拟[json-server](https://github.com/typicode/json-server)
* 造假数据[mock.js](https://github.com/nuysoft/Mock/tree/refactoring)
* 首页轮播 [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)  
* 图片懒加载 [vue-lazyload](https://github.com/hilongjw/vue-lazyload)
* 工具函数库[lodash](https://github.com/lodash/lodash)

## 主要功能实现
* axio获取接口数据，插入模板
* 路由验证，未登录点击购物车和个人中心跳转到登录页面
* 路由跳转附带，实现根据商品id请求详情资源
* 添加至购物车，购物车删除和添加及批量删除
* vuex状态存储
因为后台只有一个json-server来模拟数据接口，所以对数据的操作全放在了前端处理

## 项目结构
~~~
├─build
├─config
├─mock-server           // 存放mock数据相关
|  └─data
├─src
│  ├─assets
│  │  |─style           // 公共样式
|  |  └─iconfont
│  ├─pages              // 页面
│  │  ├─car
│  │  ├─category
│  │  ├─common
│  │  ├─home
│  │  │  └─components   // 页面里的组件
│  │  ├─login
│  │  │  └─components
│  │  ├─productdetail
│  │  └─user
│  ├─router             // 路由
|  └─store              // vuex状态管理
└─static                // 静态资源
    ├─images 
    │  └─categories
    └─lib 
~~~

* npm install 安装依赖

* npm run start 开启mock服务器并运行开发环境

* npm run mock 单独开启mock服务器

* npm run dev 单独运行开发环境

* npm run build 打包生产环境文件

* npm run data 重新生成合并模拟数据