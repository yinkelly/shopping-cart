<template>
  <v-app id="app">
    <v-toolbar
      dark
      app
      fixed
      dense
      clipped-left>
      <v-toolbar-title
        class="ml-2 pl-3">
        <span class="hidden-xs-only">D&D</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  props: {},
}
</script>

<style>
</style>
