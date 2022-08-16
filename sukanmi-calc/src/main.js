import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'

const app = createApp(App)
app.use(ElementUI)
app.mount('#app')