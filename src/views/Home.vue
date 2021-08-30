<template>
  <div>
    <v-toolbar
      flat
      class="transparent mx-0"
    >
      <v-toolbar-title 
        class="light-blue--text px-0"
      >
        Lista de Alunos
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        color="red"
        dark
        class="mr-2"
        v-show='isSelected'
        @click='deleteUser(selected)'
      >
        Excluir
      </v-btn>

      <v-dialog
        v-model='dialog'
        width='550'
      >
        <template v-slot:activator='{ on, attrs }'>
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Novo
          </v-btn>
        </template>

        <v-card>
          <v-card-title>
            Cadastrar novo aluno
          </v-card-title>

          <v-divider />

          <v-card-text class="pb-0">
            <v-container>
              <v-row class="my-2 d-flex justify-center">
                <v-avatar
                  color='grey'
                  size='138'
                ></v-avatar>
              </v-row>
              <v-row >
                <v-col
                  cols='6'
                >
                  <v-text-field
                    label='Nome'
                    outlined
                    hide-details
                    class="rounded-0"
                    v-model='newUser.name'
                  ></v-text-field>
                </v-col>
                <v-col
                  cols='6'
                >
                  <v-text-field
                    label='Email'
                    outlined
                    hide-details
                    class="rounded-0"
                    v-model='newUser.email'
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols='12'
                >
                  <v-text-field
                    label='Skills'
                    placeholder='Digite as skills separadas por ","'
                    outlined
                    hide-details
                    class="rounded-0"
                    v-model='newUser.skills'
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols='12'
                >
                  <v-text-field
                    label='Foto'
                    placeholder="Digite a url da foto"
                    outlined
                    hide-details
                    class="rounded-0"
                    v-model='newUser.photo'
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn
              color='primary'
              class='mb-2'
              @click='addNewUser'
            >
              Novo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="users"
      item-key="name"
      show-select
      class="elevation-1"
    >
      <template v-slot:item.name='{ item }'>
        <v-avatar size='32' class="mr-1">
          <v-img
            :src='item.photo'
            alt='Teste'
          />
        </v-avatar>
        {{ item.name }}
      </template>
      <!-- <template v-slot:item.skills='{ item }'>
        <v-chip
          color="light-blue"
          label
          outlined
          class="text-uppercase"
        >
          {{ item.skills.replace(/\,/g, '') }}
        </v-chip>
      </template> -->
      <template v-slot:item.skills='{ item }'>
        <v-chip
          color="light-blue"
          label
          outlined
          class="mr-2 text-uppercase"
          v-for='skill in item.skills.split(",")'
          :key='skill'
        >
          {{ skill }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      selected: [],
      newUser: {
        name: '',
        photo: '',
        email: '',
        skills: '',
        added: '',
      },
      dialog: false,
      headers: [
        {
          text: 'Nome',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Email', value: 'email' },
        { text: 'Skills', value: 'skills' },
        { text: 'Adicionado em:', value: 'added' },
      ],
      users: [
        {
          name: 'Lindsey Stroud',
          photo: 'https://github.com/nomadtechie.png',
          email: 'lindsey.stroud@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Jul 10 2021'
        },
        {
          name: 'Nicci Troiani',
          photo: 'https://github.com/sdras.png',
          email: 'nicci.troiani@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Jun 05 2021'
        },
        {
          name: 'George Fields',
          photo: 'https://github.com/afontcu.png',
          email: 'george.fields@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'May 28 2021'
        },
        {
          name: 'Rebecca Moore',
          photo: 'https://github.com/lauragift21.png',
          email: 'rebecca.moore@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'May 14 2021'
        },
        {
          name: 'Jane Doe',
          photo: 'https://github.com/CodesOfRa.png',
          email: 'jane.dow@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Apr 12 2021'
        },
        {
          name: 'Jones Dermot',
          photo: 'https://github.com/Akryum.png',
          email: 'jones.dermot@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Mar 11 2021'
        },
        {
          name: 'Martin Merces',
          photo: 'https://github.com/bencodezen.png',
          email: 'martin.merces@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Feb 09 2021'
        },
        {
          name: 'Franz Ferdinand',
          photo: 'https://github.com/danielroe.png',
          email: 'franz.ferdinand@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Feb 06 2021'
        },
        {
          name: 'John Smith',
          photo: 'https://github.com/chrisvfritz.png',
          email: 'john.smith@gmail.com',
          skills: '',
          added: 'Jan 30 2021',
          skills: 'Html, Vue, React, Angular'
        },
      ],
    }
  },
  computed: {
    isSelected() {
      if (this.selected.length > 0) return true;
      else return false;
    },
  },
  methods: {
    getDateFormatetd() {
      // Mon Aug 30 2021 15:38:39 GMT-0300 (Horário Padrão de Brasília)
      const date = new Date();
      const strDate = date.toString().slice(4, 15);
      return strDate;
    },
    addNewUser() {
      if (
        this.newUser.name.length > 0 &&
        this.newUser.email.length > 0 &&
        this.newUser.skills.length > 0 
      ) {
        this.newUser.added = this.getDateFormatetd();
        this.users.unshift(this.newUser);
        this.dialog = false;
        this.newUser = {
          name: '',
          email: '',
          skills: '',
          added: '',
        }
      }   
    },
    getColor(skills) {
      if (skills) return 'light-blue'
      else return 'transparent'
    },
    deleteUser(toDelete) {
      const verify = confirm(`Excluir os registros selecionados?`);
      if (verify) {
        toDelete.forEach(item => {
          this.users = this.users.filter(user => user.email !== item.email);
        });
      }
      this.selected = [];
    },
  },
}
</script>
