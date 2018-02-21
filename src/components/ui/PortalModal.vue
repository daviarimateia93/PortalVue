<template>
  <v-dialog v-model="modalContent.active" persistent max-width="500px">
    <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
    <v-card>
      <v-card-title :class="{
        success: modalContent.type === 'success',
        primary: modalContent.type === 'primary',
        info: modalContent.type === 'info',
        warning: modalContent.type === 'warning',
        danger: modalContent.type === 'danger'
      }"
      >
        <span class="headline">{{ modalContent.title }}</span>
      </v-card-title>
      <v-card-text>
       {{ modalContent.content }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="modalContent.active = false">{{ modalContent.confirmButton.text }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modalObject: {
      type: Object,
      required: true
      // falta validação.
    }
  },

  data () {
    return {
      modalContent: this.modalObject
    }
  }
}
</script>

<style>
.success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
}
.info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
</style>
