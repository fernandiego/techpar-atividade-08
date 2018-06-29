<template>
  <div>
    <h1>router</h1>
    <router-view></router-view>
  </div>
</template>

<script>
const VueRouter = require("vue-router");

module.exports = {
  name: "Router",
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
