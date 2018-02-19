<template>
  <v-navigation-drawer permanent :mini-variant.sync="menuStatus" app>
    <v-list class="pt-0" expand>
      <v-list-group
        v-for="item in menu.items"
        :key="item.label"
        no-action
        >
        <v-list-tile slot="activator" @click="menuClicked">
          <v-list-tile-action>
            <v-icon small class="menu--svg">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-left">{{ item.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="item.subItems" v-for="subItem in item.subItems" :key="subItem.label">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-left">{{ subItem.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// config file (change if needed)
import { menu } from '../../config'

export default {
  data () {
    return {
      menu: menu
    }
  },

  methods: {
    menuClicked () {
      if (this.$store.getters.menuStatus === true) {
        this.$store.commit('menuToogle')
      }
    }
  },

  computed: {
    menuStatus: {
      get () {
        return this.$store.getters.menuStatus
      },

      set () {

      }
    }
  }
}
</script>
<style scoped>
.menu--svg {
  margin: 0 auto;
}
</style>
