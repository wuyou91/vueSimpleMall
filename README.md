# shop-vue
一个vue.js的简单商城

数据用的mockjs生成的随机数据

* npm install 安装依赖

* npm run mock 开启mock服务器

* npm run dev 运行开发环境

* npm run build 打包生产环境文件
项目结构
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