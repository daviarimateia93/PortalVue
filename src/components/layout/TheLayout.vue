<template>
  <v-app id="app">
  <the-toolbar app></the-toolbar>
  <the-sidemenu app></the-sidemenu>
  <v-content>
    <router-view />
  </v-content>
</v-app>
</template>

<script>
import TheSidemenu from '@/components/layout/TheSidemenu'
import TheToolbar from '@/components/layout/TheToolbar'

export default {
  components: {
    TheSidemenu,
    TheToolbar
  }
}
</script>

<style>

</style>
