<template>   
  <v-app>
  <v-navigation-drawer app>
    <a href="#/listagem">Listar Pessoas</a>
    <a href="#/form">Form</a> 
  </v-navigation-drawer>
  <v-toolbar app></v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>

<script>
const VueRouter = require("vue-router");

module.exports = {
  name: "router",
  router: new VueRouter({
    routes: [
      { path: "/listagem", component: require("./listagem.vue") },
      { path: "/form/:idpessoa?", component: require("./form.vue") }
    ]
  })
};
</script>

<style>
</style>
