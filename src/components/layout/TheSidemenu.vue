<template>
  <v-navigation-drawer right="right" permanent :mini-variant.sync="menuStatus">
    <v-list class="pt-0" expand>
        <v-list-group
            v-for="item in menuItems"
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
export default {
  data () {
    return {
      right: null
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
    menuItems () {
      return this.$store.getters.menuItems
    },
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
