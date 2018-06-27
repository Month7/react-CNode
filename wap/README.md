## 启动
```
git clone
cd project && npm install
npm start
```

## 功能
- [x] 首页渲染,下拉加载
- [x] 页面详情，回复及点赞
- [x] 消息列表
- [x] 个人主页
- [x] 用户信息
- [ ] 退出
- [x] 关于
- [ ] 页面后退,数据还原及滚动条位置还原 
- [x] 文章发布
- [ ] 回到顶部
- [ ] 启动动画
- [x] 404页面

## 项目API地址 https://cnodejs.org/api
## accesstoken获取方式 https://cnodejs.org/setting

## 项目目录说明
```
.
|-- config                           // 项目开发环境配置
|-- src                              // 源码目录
|   |-- common                       // 公共文件
|   |-- components                   // 组件
|       |--xxx                       //
|          |-- component.jsx         // 
|          |-- component.css         //
|   |-- pages                        // 各种页面组件
|   |-- res                          // 静态文件
|   |-- utils                        // 工具类
|   |-- router.js                    // 路由配置文件
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息
|-- APP.css 
|-- APP.js
|-- index.js
|-- index.css
.
```