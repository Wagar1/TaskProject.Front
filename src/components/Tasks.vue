<template>
  <v-data-table
    :headers="headers"
    :items="tasks"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Задачи</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
        <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Новая задача
              </v-btn>
        </template>
         <validation-observer
            ref="observer"
            v-slot="{ invalid }"
         >
            <form @submit.prevent="submit"> 
            <v-card>
                <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
  
                <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12"> 
                    <validation-provider
                      v-slot="{ errors }"
                      name="username"
                      rules="required"
                    >
                     <v-text-field
                       v-model="editedItem.username"
                       :error-messages="errors"
                       label="Имя пользователя"
                     ></v-text-field>
                    </validation-provider>
                   </v-col>
                   <v-col
                     cols="12"
                   >
                    <validation-provider
                      v-slot="{ errors }"
                      name="username"
                      rules="required|email"
                    >
                     <v-text-field
                       v-model="editedItem.email"
                       :error-messages="errors"
                       label="Email"
                     ></v-text-field>
                    </validation-provider>
                   </v-col>
                   <v-col
                     cols="12"
                   >
                    <validation-provider
                      v-slot="{ errors }"
                      name="username"
                      rules="required"
                    >
                     <v-text-field
                       v-model="editedItem.content"
                       :error-messages="errors"
                       label="Текст задачи"
                     ></v-text-field>
                    </validation-provider>
                   </v-col>
                   <v-col
                     cols="12"
                   >
                     <v-text-field
                       v-model="editedItem.status"
                       label="Статус задачи"
                     ></v-text-field>
                   </v-col>
                 </v-row>
                </v-container>              
                </v-card-text>
                <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Отмена
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save()"
                :disabled="invalid"
              >
                Сохранить
              </v-btn>
                </v-card-actions>
            </v-card>
            </form>
         </validation-observer>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Отмена</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { required, email } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  setInteractionMode('eager');
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
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Имя пользователя',
          align: 'start',
          value: 'username',
        },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Текст задачи', value: 'content', sortable: false },
        { text: 'Статус задачи', value: 'status', sortable: false }
      ],
      tasks: [],
      editedIndex: -1,
      editedItem: {
        username: '',
        email: '',
        content: '',
        status: 0
      },
      defaultItem: {
        username: '',
        email: '',
        content: '',
        status: 0
      },
    }),

    computed: {
      ...mapGetters('tasks', ['getTasks']),
      formTitle () {
        return this.editedIndex === -1 ? 'Новая задача' : 'Редактировать задачу'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions('tasks', ['fetchTasks', 'createTask']),
      initialize: async function () {
        await this.fetchTasks();
        this.getTasks.map(x=>{
          let task = {
            username: '',
            email: '',
            content: '',
            status: 0
          }
          task.username = x.UserName;
          task.email = x.Email;
          task.content = x.Text;
          task.status = x.Status;
          this.tasks.push(task);
        });
      },

      editItem (item) {
        this.editedIndex = this.tasks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.tasks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.tasks.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save: async function() {
        if (this.editedIndex > -1) {
          Object.assign(this.tasks[this.editedIndex], this.editedItem);
        } else {
          this.tasks.push(this.editedItem);
          await this.createTask(this.editedItem);
        }
        this.close()
      },
    },
  }
</script>