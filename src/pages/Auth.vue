<template>
  <v-app>
  <v-toolbar app></v-toolbar>
  <v-content>
    <v-container fluid>
        <v-form v-model="valid">
    <v-text-field
      label="Matriz"
      v-model="matriz"
      required
    ></v-text-field>
    <v-text-field
      label="Usuário"
      v-model="usuarioApelido"
      required
    ></v-text-field>
    <v-text-field
      label="Senha"
      v-model="senha"
      required
    ></v-text-field>
  </v-form>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>
<script>
import axios from 'axios'
import sha512 from 'js-sha512'

export default {
  data () {
    return {
      matriz: '',
      usuarioApelido: '',
      senha: ''
    }
  },
  methods: {
    submit () {
      const data = {
        matriz: this.matriz,
        usuarioApelido: this.usuarioApelido,
        encryptedUsuarioSenha: sha512(this.senha),
        token: `${this.matriz}@${this.usuarioApelido}@${this.encryptedUsuarioSenha}`
      }
      axios.post('endpoint', data)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    onSuccess (data) {
      this.$store.commit('setAuth', data)
      this.$router.replace('/')
    }
  },
  mounted () {
  }
}

//to com sono, vou dormir, amanha acordo as 6
</script>
