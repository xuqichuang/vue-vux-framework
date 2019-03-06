import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading';

// vux // 全局loading组件
import { LoadingPlugin, AlertPlugin, ToastPlugin, ConfirmPlugin } from 'vux'
import { XButton } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

// 全局组件配置
const components = ()=>{
  if(components.installed){
    return;
  }
  Vue.component('InfiniteLoading', InfiniteLoading)
  Vue.component('x-button', XButton)
}
Vue.use(InfiniteLoading, {
  slots: {
    // 删除默认样式
    // noResults: InfiniteError,
    // 保持默认样式
    noMore: '暂无更多数据',
    // hide slot
    error: {
      render: h => h('div'),
    },
  },
});
export default components