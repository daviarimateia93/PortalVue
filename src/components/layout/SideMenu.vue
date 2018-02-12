<template>
  <v-navigation-drawer permanent light :mini-variant.sync="mini">
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-group v-for="item in menuItems" :key="item.label">
        <v-list-tile slot="item">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="subItem in item.subItems" v-bind:key="subItem.label">
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      right: null
    }
  },
  computed: {
    menuItems () {
      return this.$store.getters.menuItems
    },
    menuStatus () {
      return this.$store.getters.menuStatus
    }
  }
}
</script>
