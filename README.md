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
  target: 'https://m.t.ly.com/',
  changeOrigin: true,
  headers: {
    //线上   -- 徐其闯
    Cookie: 'cnUser=userid=538104345&nickName=%e5%be%90%e5%85%b6%e9%97%af&loginType=&token=210038200240214210068210193006235189161234230061110117183126116142191024231188197035102195181231092139197064198170117097123049161078236131145195&authcode=; Hm_lvt_b320b810ac670c07d66d1f86b1687d66=1536066064; abtkey=798d6793-6073-414f-ab3f-e52ca7962be4; ASP.NET_SessionId=kjqf0rwaprhb3k2lo40accgo; Hm_lvt_af84a792379f8cda9ad603f65314ea28=1536377142; ver=2.0; qdid=-99999; CNSEInfo=RefId=10758821&tcbdkeyid=&SEFrom=&SEKeyWords=&RefUrl=; 17uCNRefId=10758821; __tctma=144323752.1535367939599306.1536042127509.1536227467059.1536384851188.7; __tctmu=144323752.0.0; __tctmz=144323752.1536384851188.7.1.utmccn=(direct)|utmcsr=(direct)|utmcmd=(none); longKey=1535367939599306; __tctrack=0; dialogFlag=1; zlChannelId=zhenlv; __tctmc=144323752.25117926; __tctmd=144323752.201428045; __tctmb=144323752.4035398378258918.1536385055916.1536385106275.5; Hm_lpvt_af84a792379f8cda9ad603f65314ea28=1536385812',
  }
}
需要修改的内容： 
target: 项目映射地址,
headers:{
    Cookie: 项目携带的cookie信息
}

proxyTable: {
  '/vtravel': proxyTable,
  '/itravel': proxyTable  
},
proxyTable: {
    这里是项目根目录所对应的参数信息，可以为多个，多个根目录对应信息结构基本一致
}
```
[git源文件地址](https://github.com/xuqichuang/vue-vux-framework)
