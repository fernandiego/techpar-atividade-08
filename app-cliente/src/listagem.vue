<template>
<v-data-table
    :headers="headers"
    :items="lista"
    hide-actions
    class="elevation-1">
        <template slot="items" slot-scope="x">
            <td>{{x.item.nomepessoa}}</td>
            <td>{{x.item.telefonepessoa}}</td>
            <td>{{x.item.idadepessoa}}</td>
            <td align="center">
              <v-btn fab @click="$router.push('/form/'+x.item.idpessoa)" dark color="cyan">
                <v-icon dark>edit</v-icon>
              </v-btn>
              <v-btn fab @click="del(x.item)" dark color="red">
                <v-icon dark>delete</v-icon>
              </v-btn>
            </td>
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
      },
      {
        text: "Editar",
        value: "",
        align: "center"
      }
    ],
    lista: []
  }),

  methods: {
    list() {
      pessoa.list().then(ret => {
        this.lista = ret.data;
      })
    },
    del(p){
      pessoa.del(p.idpessoa).then(ret => {
        this.list()
      }) 
    }
  },
  created() {
    this.list();
  }
};
</script>

<style>
</style>
