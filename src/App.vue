<template>
  <v-app>
    <v-app-bar
      app
      flat
      class="white"
    >
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-toolbar-title>Pesquise por nome ou skills</v-toolbar-title>
    </v-app-bar>

    <v-main
      class="grey lighten-4"
    >
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
