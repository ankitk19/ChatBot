import '@babel/polyfill' // <- babel Polyfills
import 'whatwg-fetch' // <- Fetch API Polyfill

import Vue from 'vue'
import App from './Components/App/App.vue'

import config from './../config'
import worker from './registerServiceWorker' // <- register service worker, disable it, when running in development mode

Vue.prototype.config = config // <- set config to global scope

Vue.prototype.history = () => {
    try {
        localStorage.getItem('check')
        return true
    }

    catch {
        return false
    }
}

Vue.prototype.lang = () => {
    if(Vue.prototype.history()) return localStorage.getItem('lang') || config.app.fallback_lang

    else {
        return config.app.fallback_lang
    }
}

new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app')
