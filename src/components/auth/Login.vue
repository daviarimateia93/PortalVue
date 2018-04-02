<template>
    <v-dialog :value="true" persistent max-width="500px">
      <v-card hover="" style="background:white">
        <v-card-title class="black--text">
          <div class="text-xs-center">Login</div>
        </v-card-title>
        <v-card-text class="pt-4">
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
            type="password"
            required
          ></v-text-field>
          <v-btn @click="submit()">login</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>
<script>
import axios from 'axios'
import sha512 from 'js-sha512'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      matriz: '',
      usuarioApelido: '',
      senha: '',
      isAuth: true
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
    ...mapActions({
      login: 'setAutenticacao'
    }),

    submit () {
      const axiosAuth = axios.create({
        baseURL: 'http://gerenciarmeapi.mg3vsryazd.sa-east-1.elasticbeanstalk.com/rest',
        headers: {
          'Authorization': this.token
        }
      })
      const vm = this
      axiosAuth.get('/Autorizacao', vm)
        .then(res => {
          vm.login({
            usuarioApelido: vm.usuarioApelido,
            token: vm.token,
            matriz: vm.matriz,
            permissoes: vm.permissoes
          })
          vm.$router.replace('/')

          this.$route.name = 'Home'
        })
        .catch(error => console.log(error))
    }
  },

  mounted () {
  }
}
//             usuarioApelido: vm.usuarioApelido,
//            token: vm.token,
//            matriz: vm.matriz,
//            permissoes: vm.permissoes
</script>
