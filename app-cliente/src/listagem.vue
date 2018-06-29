<template>
<v-data-table
    :headers="headers"
    :items="lista"
    hide-actions
    class="elevation-1">
        <template slot="items" slot-scope="props">
            <td>{{props.item.nomepessoa}}</td>
            <td>{{props.item.telefonepessoa}}</td>
            <td>{{props.item.idadepessoa}}</td>
        </template>
</v-data-table>
</template>

<script>
const { pessoa } = require("./api");
module.exports = {
  name: "Lista",
  data: _ => ({
    headers: [
      {
        text: "Nome",
        value: "nomepessoa"
      },
      {
        text: "Telefone",
        value: "telefonepessoa"
      },
      {
        text: "Idade",
        value: "idadepessoa"
      }
    ],
    lista: []
  }),
  
  methods: {
    list() {
      pessoa.list().then(ret => {
        this.lista = ret.data

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
