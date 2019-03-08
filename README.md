# vue-vux-framework

> vue + vux 搭建前端项目， 开箱即用

## 开始

```
npm install 安装项目依赖包
```

## 以下是需要修改项

> /config/index.js

```
const proxyTable = {
  target: 'https://baidu.com/',
  changeOrigin: true,
  headers: {

  }
}
需要修改的内容： 
target: 项目映射地址,
headers:{
    Cookie: 项目携带的cookie信息
}

proxyTable: {
  '/api': proxyTable,
  '/apis': proxyTable  
},
proxyTable: {
    这里是项目根目录所对应的参数信息，可以为多个，多个根目录对应信息结构基本一致
}
```
[git源文件地址](https://github.com/xuqichuang/vue-vux-framework)
