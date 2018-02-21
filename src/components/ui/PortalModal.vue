<template>
  <v-dialog v-model="modalContent.active" persistent max-width="500px">
    <v-card>
      <v-card-title :class="modalTypeClass">
        <span class="headline">{{ modalContent.title }}</span>
      </v-card-title>
      <v-card-text>
       {{ modalContent.content }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :class="modalTypeClass" flat @click.native="modalContent.active = false">{{ modalContent.confirmButton.text }}</v-btn>
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
  },

  computed: {
    modalTypeClass () {
      return this.modalContent.type
    }
  }
}
</script>

<style>
.success {
  color: #fff !important;
  background-color: #5cb85c !important;
  border-color: #4cae4c;
}
.primary {
  color: #fff !important;
  background-color: #428bca !important;
  border-color: #357ebd;
}
.info {
  color: #fff !important;
  background-color: #5bc0de !important;
  border-color: #46b8da;
}
.warning {
  color: #fff !important;
  background-color: #f0ad4e !important;
  border-color: #eea236;
}
.danger {
  color: #fff !important;
  background-color: #d9534f !important;
  border-color: #d43f3a;
}
</style>
