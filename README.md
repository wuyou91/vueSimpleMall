# shop-vue
一个vue.js的简单商城

## 数据接口
~~数据由mockjs搭配json-server生成随机数据模拟后台接口~~  
node爬取的网易严选的数码产品分类下的数据，没有把图片下载下来，直接使用的是网易严选的图片，若其删除则会造成无法获取到对应的图片。
mock-server/data文件夹下用来存放各类元数据,通过运行merge.js将数据合并到db.json内，作为服务数据。

## 登录与注册
登录与注册采用sessionStorage存储用户信息，验证时直接从sessionStorage取出数据验证。
~~~
sessionStorage.setItem('userData', userinfo) // 储存用户注册信息

sessionStorage.setItem('hasLogin', '1') // 登录设置为'1'，退出登录设置为'0'
~~~

## 用到的插件
* 首页轮播 [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)  
* 图片懒加载 [vue-lazyload](https://github.com/hilongjw/vue-lazyload)

## 主要功能实现
* axio获取接口数据，插入模板
* 路由验证，未登录点击购物车和个人中心跳转到登录页面
* 路由跳转附带query字段，实现根据商品id请求详情资源

## 项目结构
~~~
├─build
├─config
├─mock-server           // 存放mock数据相关
|  └─data
├─src
│  ├─assets
│  │  └─style           // 公共样式
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
│  └─router             // 路由
└─static                // 静态资源
    ├─images 
    │  └─categories
    └─lib 
~~~

* npm install 安装依赖

* npm run mock 开启mock服务器

* npm run dev 运行开发环境

* npm run build 打包生产环境文件

* npm run data 重新生成合并模拟数据