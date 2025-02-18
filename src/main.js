import { createApp } from 'vue'

import App from './App.vue'
import CarItems from './components/CarItems.vue'

const app = createApp(App)
app.component('Car-Items',CarItems)
app.mount('#app')
