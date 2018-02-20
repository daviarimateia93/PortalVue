<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    modalObject: {
      type: Array,
      required: true
      // falta validação.
    }
  },

  data () {
    return {
      modalContent: {
        type: ['success', 'info', 'warning', 'error'],
        isForm: false,
        title: '',
        content: '',
        actions: [
          {
            actionName: 'Salvar',
            color: '',
            onClick: ''
          },
          {
            actionName: 'Editar',
            color: '',
            onClick: ''
          },
          {
            actionName: 'Excluir',
            color: '',
            onClick: ''
          }
        ]
      },
      dialog: false
    }
  }
}
</script>

<style>

</style>
