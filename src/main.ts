import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 加载粒子动画效果
import Particles from "vue3-particles";
import { loadHeartShape } from 'tsparticles-shape-heart';
import { tsParticles } from "tsparticles-engine";
loadHeartShape(tsParticles);
createApp(App).use(Particles).mount('#app')