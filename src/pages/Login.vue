<template>
  <v-content>
    <v-container fluid>
        <v-form>
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
          <v-btn @click="submit()">login</v-btn>
        </v-form>
    </v-container>
  </v-content>
</template>
<script>
import axios from 'axios'
import sha512 from 'js-sha512'
export default {
  data () {
    return {
      matriz: '',
      usuarioApelido: '',
      senha: '',
      isAuth: true,
      wrapper: {
        isAuth: true,
        usuarioApelido: this.usuarioApelido,
        token: this.token,
        matriz: this.matriz,
        permissoes: this.permissoes
      }
    }
  },
  computed: {
    token () {
      return `${this.matriz}@${this.usuarioApelido}@${this.encryptedUsuarioSenha}`
    },
    encryptedUsuarioSenha () {
      return sha512(this.senha)
    }
  },
  methods: {
    submit () {
      const axiosAuth = axios.create({
        baseURL: 'http://gerenciarmeapi.mg3vsryazd.sa-east-1.elasticbeanstalk.com/rest',
        headers: {
          'Authorization': this.token
        }
      })
      axiosAuth.get('/Autorizacao')
        .then(res => {
          console.log('invadi')
          this.$store.dispatch('setAutenticacao', this.wrapper)
          this.$router.replace('/')
          console.log('mudou o estado')
        })
        .catch(error => console.log(error))
    }
  },
  mounted () {
  }
}
</script>
