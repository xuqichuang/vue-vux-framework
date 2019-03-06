import Vue from 'vue'
import request from '@/common/utils/request'
import * as url from './urls'

/*
通过postRequest 请求数据
参数params格式为：
      {
        type:"string", //type请求变量的url地址常量名称，参考url.js文件里面的常量.
        data:{object}  //data传递到后台的参数信息，主要是object对象，传入时进行对象转换
        noLoading: "boolean", 是否存在loading，true 不显示全局loading ，默认false显示loading
      }
*/

export function postRequest(params) {
  // 显示
  if(!params.noLoading){
    Vue.$vux.loading.show({
      text: '加载中'
    })
  }
 
  return request('post', url[params.type], { ...params.data }).then(res => {
    Vue.$vux.loading.hide()
    return res
  }, err => {
    Vue.$vux.loading.hide()
  }).catch(rej =>{
    // 隐藏
    throw rej
  })
}

// 通过getRequest 请求数据
export function getRequest(params) {
  return request('GET', url[params.type], {...params.data }).then(res => {
    Vue.$vux.loading.hide()
    return res
  }, err => {
    Vue.$vux.loading.hide()
  }).catch(rej =>{
    // 隐藏
    throw rej
  })
}
