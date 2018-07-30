# miniApp
小程序项目骨架

#### 一些项目开发需要的配置：
1. wepy.config.js 类似 webpack.config.js 

2. project.config.json 小程序的项目配置文件 修改 appId 和 projectname 即可。

3. .eslintrc.js EsLint的配置文件 ,文件内已经做注释说明,可根据需要修改。

#### src目录是写的代码所在的目录

 components 是组件所在的目录，里面有几个组件示例

 image 项目需要的图片 

 lib 里也是开发的代码中的一些配置 比如需要请求的接口 ，接口成功的状态码，还有域名配置,这些最终在app.wpy文件中会挂载在wepy对象的GlobalData对象上 在请求一个接口时就可以很方便的写
 ```
 let url = wepy.GlobalData.baseUrl + wepy.GlobalData.api.v2.xxx;
 let res = await  wxRequest.get(url,params);
 if(res.data.code.toString()===wepy.GlobalData.RES_OK){
     console.log("请求成功！")
 }
 ``` 

 mixins  混合可以将组件之间的可复用部分抽离，从而在组件中使用混合时，可以将混合的数据，事件以及方法注入到组件之中 

 page 时页面所在的目录

 style 中是全局样式 在 app.wpy 中导入。
 注意：
 1.字体图标一般转成base64的方式使用。
 2.定义less变量的base.less 在全局引用后在其他组件中 并不能直接用, 所以全局引用没什么用，需每个用到的地方手动 引用 。
 3.wepy.config.js中定义的别名@对导入样式不起作用。


utils中
1. constant.js 系统常量
2. md5.js md5加密
3. moment.js 时区工具 依赖 moment.js库
4. tip.js 封装了系统的提示（不如用 wepy-simple-toast ）
5. util.js 常用工具
6. wxRequst.js 包装下 请求，有token的时候带上token,并为某些特别的方法带上设备的相关信息
7.WXBizDataCrypt.js 用来解密encryptedData中的信息 ，依赖cryptjs,具体用法：
```
  let crypt = new WXBizDataCrypt(appId, session_key);

  let data = crypt.decryptData(encryptedData, iv);
```

#### 结束


