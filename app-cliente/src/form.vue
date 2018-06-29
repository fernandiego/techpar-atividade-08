<template>
  <v-form ref="form" v-model="valid" lazy-validation  @submit.prevent="dosave">
    <v-text-field
      v-model="pessoa.nomepessoa"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="pessoa.telefonepessoa"
      label="Telefone"
      required
    ></v-text-field>
    <v-btn
      type="submit"
    >
      Salvar pessoa
    </v-btn>
  </v-form>
</template>

<script>
const {pessoa} = require('./api')
module.exports = {
  name: "Form",
  data: _ => ({ pessoa: { nomepessoa: "", telefonepessoa:"" } }),
  methods: {
    dosave() {
      pessoa.save(this.pessoa)
        .then(ret => {
          this.pessoa = ret.data;
          this.$router.push("/listagem");
        })
        .catch(err => {
          console.log(err);
          alert("Erro ao salvar pessoa");
        });
    }
  }
};
</script>

<style>
</style>
