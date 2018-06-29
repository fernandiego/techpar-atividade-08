<template>
  <div>
    <a href="#/listagem">Listar Pessoas</a>
    <a href="#/form">Form</a> 
    <router-view></router-view>
  </div>
</template>

<script>
const VueRouter = require("vue-router");

module.exports = {
  name: "router",
  router: new VueRouter({
    routes: [
      { path: "/listagem", component: require("./listagem.vue") },
      { path: "/form", component: require("./form.vue") }
    ]
  })
};
</script>

<style>
</style>
