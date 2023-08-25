import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/index.css';

//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import gloablComponent from './components/index'
//引入模板的全局的样式
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
import router from './router'
//引入pinia
import pinia from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


//获取应用实例对象--注册icon
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
//安装自定义插件
app.use(gloablComponent)
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})
app.use(router)
//引入路由鉴权文件
import './permisstion'
app.use(pinia)
console.log(import.meta.env)
//引入自定义指令文件
import { isHasButton } from '@/directive/has'
isHasButton(app)
app.mount('#app')
