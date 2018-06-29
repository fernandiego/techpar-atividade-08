const Vue = require("vue")
const Vuetify = require("vuetify")
const VueRouter = require("vue-router")
require('../node_modules/vuetify/dist/vuetify.min.css') // Ensure you are using css-loader


Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.component("app-vue", require("./app.vue"))

new Vue({
    el: "#app",
    render: r => r("app-vue")
})

