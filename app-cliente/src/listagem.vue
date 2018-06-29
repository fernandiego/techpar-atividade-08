<template>
    <div>
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Telefone</th>
        </tr>
    </thead>
    <tbody>
        <tr align="center" v-for="p in lista" :key="p.idpessoa" >
            <td>{{p.nomepessoa}}</td>
            <td>{{p.telefonepessoa}}</td>
        </tr>
    </tbody>
</table>
    </div>
</template>

<script>
const { pessoa } = require("./api");
module.exports = {
  name: "Lista",
  data: _ => ({ lista: [] }),
  methods: {
    list() {
      pessoa.list().then(ret => {
        this.lista = ret.data;
      });
    }
  },
  created() {
    this.list();
  }
};
</script>

<style>
</style>
