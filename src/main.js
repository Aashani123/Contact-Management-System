import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// we haVve to configure the bootstrap fontawsome axios apllications
// bootstrap css,js
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"


//congifure fontawesome icons
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

import "./styles.css"; //main css file


createApp(App).use(store).use(router).mount('#app')
