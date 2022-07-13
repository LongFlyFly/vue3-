import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import mitt from 'mitt'

// app.config.globalProperties.$mitt = new mitt();
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
// app.config.globalProperties.$axios=http //将自己封装的的axios挂载到vue实例上,http跟上面的import导入一致