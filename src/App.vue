<template>
<v-app id="app">
  <tool-bar app></tool-bar>
  <side-menu app></side-menu>
  <v-content>
    <router-view>
      <v-container fluid></v-container>
    </router-view>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>

<script>
import SideMenu from '@/components/layout/SideMenu'
import ToolBar from '@/components/layout/Toolbar'

export default {
  name: 'App',
  components: {
    SideMenu,
    ToolBar
  }
}
</script>

<style>
</style>
