<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <tasks></tasks>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Tasks from '../components/Tasks.vue'
  export default {
    name: 'Home',

    components: {
        Tasks
    },
  }
</script>
