<template>
   <v-card class="w-mt">
       <v-card-text>
           <v-container>
               <v-row>
                   <v-col></v-col>
                   <v-col cols="3">
                           <validation-observer
                               ref="observer"
                               v-slot="{ invalid }"
                           >
                           <form @submit.prevent="submit">
                             <validation-provider
                              v-slot="{ errors }"
                              name="username"
                              rules="required|max:10"
                            >
                            <v-text-field
                              v-model="username"
                              :error-messages="errors"
                              label="Имя пользователя"
                              required
                            ></v-text-field>
                             </validation-provider>
                             <validation-provider
                                v-slot="{ errors }"
                                name="email"
                                rules="required|email"
                              >
                        <v-text-field
                          v-model="email"
                          :error-messages="errors"
                          label="E-mail"
                          required
                        ></v-text-field>
                             </validation-provider>
                             <v-btn
                        type="submit"
                        text
                        :disabled="invalid"
                             >Логин</v-btn>
                             <v-btn text @click="clear">
                       Очистить
                             </v-btn>
                           </form>
                       </validation-observer>
                   </v-col>
                   <v-col></v-col>
            </v-row>
           </v-container>
       </v-card-text>
   </v-card>
 </template>
<script>
  import { required, email } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: 'Поле не может быть пустым',
  })

  extend('email', {
    ...email,
    message: 'Email должен быть правильным',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      username: '',
      email: ''
    }),

    methods: {
      submit () {
        this.$refs.observer.validate();
      },
      clear () {
        this.username = '';
        this.email = '';
        this.$refs.observer.reset();
      },
    },
  }
</script>

<style scoped>
    .w-mt{
        margin-top: 20px;
    }
</style>