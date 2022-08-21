import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 加载粒子动画效果
import Particles from "vue3-particles";
const app = createApp(App);
app.use(Particles).mount('#app')
