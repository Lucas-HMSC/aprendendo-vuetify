<template>
  <div>
    <v-toolbar
      flat
      class="transparent"
    >
      <v-toolbar-title 
        class="light-blue--text"
      >
        Lista de Alunos
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        dark
        class="mb-2"
        v-bind="attrs"
        v-on="on"
      >
        Novo
      </v-btn>
    </v-toolbar>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="users"
      item-key="name"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
    
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
          email: 'lindsey.stroud@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: '5 Minutes Ago'
        },
        {
          name: 'Nicci Troiani',
          email: 'nicci.troiani@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: '14 Minutes Ago'
        },
        {
          name: 'George Fields',
          email: 'george.fields@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: '6 Hours Ago'
        },
        {
          name: 'Rebecca Moore',
          email: 'rebecca.moore@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Dec 14, 2018'
        },
        {
          name: 'Jane Doe',
          email: 'jane.dow@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Dec 12, 2018'
        },
        {
          name: 'Jones Dermot',
          email: 'jones.dermot@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Dedc 11, 2018'
        },
        {
          name: 'Martin Merces',
          email: 'martin.merces@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Dec 9, 2018'
        },
        {
          name: 'Fraz Ferdinand',
          email: 'franz.ferdinand@gmail.com',
          skills: 'Html, Vue, React, Angular',
          added: 'Dec 6, 2018'
        },
        {
          name: 'John Smith',
          email: 'john.smith@gmail.com',
          skills: '',
          added: 'Nov 30, 2018'
        },
      ],
    }
    },
}
</script>
