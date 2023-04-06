import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "boxicons/css/boxicons.min.css";





import './assets/main.css'

const app = createApp(App)


app.use(router)

app.mount('#app')
