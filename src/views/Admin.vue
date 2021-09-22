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
                              rules="required"
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
                                name="password"
                                rules="required"
                              >
                        <v-text-field
                          v-model="password"
                          :error-messages="errors"
                          label="Пароль"
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
  import { required } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import { mapActions } from 'vuex'
  const dict = {
    custom: {
      email: {
        required: 'Your email is empty'
      },
      name: {
        required: () => 'Your name is empty'
      }
    }
  };
  
  Validator.localize('en', dict);
  // or use the instance method
  this.$validator.localize('en', dict);
  
  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: 'Поле является обязательным для заполнения',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      username: '',
      password: ''
    }),

    methods: {
      ...mapActions('admin', ['login']),
      submit: async function() {
        this.$refs.observer.validate();
        try{
          await this.login({username: this.username, password: this.password});
        }catch(error){
          console.log(error);
        }
        
      },
      clear () {
        this.username = '';
        this.password = '';
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