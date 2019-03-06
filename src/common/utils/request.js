/*
 * @Author: 徐其闯 
 * @Date: 2018-11-28 11:18:06 
 * @Last Modified by: 徐其闯
 * @Last Modified time: 2019-03-06 13:32:13
 */

import axios from 'axios'
import jsonp from 'jsonp'
import qs from 'qs'

// jsonp请求
const timeout = 5000 * 2
const jsonpConfig = {
  timeout
}
// 基本配置
const axiosConfig = {
  timeout,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  // transformRequest: [function(data) {
  //   // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
  //   data = qs.stringify(data)
  //   return data
  // }]
}

// request拦截器
axios.interceptors.request.use(config => {
  // if (store.getters.token) {
    // config.headers['Labrador-Token'] = '6b5cc619-4627-408a-9b6c-d7a82d459b22' // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// axios.interceptors.response.use(function (res) {
//   //在这里对返回的数据进行处理
//   if (res.data.status == "0"  ) {
//     // window.sessionStorage.setItem("token", res.data.data);
//     return res; 
//   }else{
//     return res; 
//   }
// }, function (err) {
//   return Promise.reject(err);
// })

export default (method, url, option = {}) => {
  let isPost = true
  const config = option.config || {}
  delete option.config

  method = (method || '').toUpperCase()

  if (['GET', 'DELETE', 'HEAD', 'JSONP'].indexOf(method) > -1) {
    const query = qs.stringify(option, {
      addQueryPrefix: true
    })
    isPost = false

    if (url.indexOf('?') > -1) {
      url += query.replace('?', '&')
    } else {
      url += query
    }
  }

  if (method === 'JSONP') {
    return new Promise((resolve, reject) => {
      jsonp(url, { ...jsonpConfig, ...config }, (err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
    })
  }

  const makeConfig = { method, url }
  if (isPost) {
    makeConfig.data = qs.stringify(option)
  }

  return axios({
    ...axiosConfig,
    ...makeConfig,
    ...config
  }).then(ret => ret.data).catch(error => {this.$throw(error)})
}
