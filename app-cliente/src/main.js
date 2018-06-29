const Vue = require("vue")
const Vuetify = require("vuetify")

Vue.use(Vuetify)

Vue.component("app-vue", require("./app.vue"))

new Vue ({
    el: "#app",
    render: r => r("app-vue")
})

