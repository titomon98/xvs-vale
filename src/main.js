// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Aquí registramos el router para que <router-view> funcione
app.use(router)

app.mount('#app')
