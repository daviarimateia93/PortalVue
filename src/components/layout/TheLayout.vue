<template>
  <div>
    <the-toolbar></the-toolbar>
    <the-sidemenu></the-sidemenu>
    <v-content>
      <v-container grid-list-xl fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </div>
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
