'use strict'
// Template version: 1.2.4
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const proxyTable = {
  target: 'https://m.t.ly.com/',
  changeOrigin: true,
  headers: {
    //线上   -- 徐其闯
    Cookie: 'cnUser=userid=538104345&nickName=%e5%be%90%e5%85%b6%e9%97%af&loginType=&token=210038200240214210068210193006235189161234230061110117183126116142191024231188197035102195181231092139197064198170117097123049161078236131145195&authcode=; Hm_lvt_b320b810ac670c07d66d1f86b1687d66=1536066064; abtkey=798d6793-6073-414f-ab3f-e52ca7962be4; ASP.NET_SessionId=kjqf0rwaprhb3k2lo40accgo; Hm_lvt_af84a792379f8cda9ad603f65314ea28=1536377142; ver=2.0; qdid=-99999; CNSEInfo=RefId=10758821&tcbdkeyid=&SEFrom=&SEKeyWords=&RefUrl=; 17uCNRefId=10758821; __tctma=144323752.1535367939599306.1536042127509.1536227467059.1536384851188.7; __tctmu=144323752.0.0; __tctmz=144323752.1536384851188.7.1.utmccn=(direct)|utmcsr=(direct)|utmcmd=(none); longKey=1535367939599306; __tctrack=0; dialogFlag=1; zlChannelId=zhenlv; __tctmc=144323752.25117926; __tctmd=144323752.201428045; __tctmb=144323752.4035398378258918.1536385055916.1536385106275.5; Hm_lpvt_af84a792379f8cda9ad603f65314ea28=1536385812',}
}

module.exports = {
  dev: {
    
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/vtravel': proxyTable,
      '/itravel': proxyTable  
    },
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}