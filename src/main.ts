import { createApp } from 'vue'
import App from '@/App.vue'
// 引入ElementPlus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

console.log(import.meta.env)
const app = createApp(App)
//@ts-ignore
app.use(ElementPlus, {
  locale: zhCn, // Element-Plus国际化配置
})
// SVG
import 'virtual:svg-icons-register'
app.mount('#app')
