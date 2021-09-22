<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <p>{{firstName}}</p>
        <v-btn @click="go()">Go</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Admin',
    computed: {
     ...mapGetters('admin', [
        'firstName'
     ])
    },
    methods: {
        ...mapActions('admin', [
            'go'
        ])
    },
    components: {
    },
  }
</script>