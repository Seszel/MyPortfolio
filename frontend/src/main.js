import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n/i18n'

import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseDialog from './components/ui/BaseDialog.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.component('BaseButton', BaseButton)
app.component('BaseCard', BaseCard)
app.component('BaseDialog', BaseDialog)

app.mount('#app')
