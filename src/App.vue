<template>
  <v-app>
    <v-app-bar
      app
      flat
      hide-on-scroll
      class="white"
    >
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-text-field
        placeholder="Pesquise por nome ou skills"
        hide-details
        single-line
        v-model='toSearch'
      ></v-text-field>
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
  watch: {
    toSearch() {
      this.$store.dispatch('updateSearch', this.toSearch);
    },
  },
  data: () => ({
    toSearch: '',
  }),
};
</script>
