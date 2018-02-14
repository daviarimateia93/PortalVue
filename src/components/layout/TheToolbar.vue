<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon @click.native.stop="openMenu"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Portal</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed: {
  },
  methods: {
    openMenu () {
      this.$store.commit('menuToogle')
    }
  }
}
</script>

<style>

</style>
