import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import des styles globaux
import './styles/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
