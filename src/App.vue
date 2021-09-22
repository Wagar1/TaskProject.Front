<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>
        <v-btn to="/" text>Главное</v-btn>
        <v-btn to="/admin" text>Админ</v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>