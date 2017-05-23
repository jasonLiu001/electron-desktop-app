# 项目说明

## 模块依赖
`Package.json` 除了添加`angular`的相关依赖项外，还需要添加以下依赖模块，`angular`的模块依赖如下：
```shell
npm install @angular/common @angular/compiler @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router angular-in-memory-web-api rxjs zone.js --save
```

 额外的依赖模块如下：

```shell
npm install typescript --save-dev
npm install electron --save-dev
npm install @types/electron --save-dev
npm install @types/node --save-dev
```

## 开发遇到问题

`angular`模板中不能直接写`script`脚本，`electron`开发时，有在`view`中直接写`script`的需要

