import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import VueAxios from "vue-axios";
import App from './App.vue'
import router from './router'
import axios from "axios";
import Vue3Toastify, {toast} from 'vue3-toastify';
import "vue3-toastify/dist/index.css"

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)
	.use(VueAxios, axios)
	.use(pinia)
	.use(router)
	.use(Vue3Toastify, {
		position: "top-right",
		type: "default",
		theme: "light",
		autoClose: 2500,
		transition: toast.TRANSITIONS.SLIDE
	})

app.mount('#app')