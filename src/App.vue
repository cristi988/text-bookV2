<template>
  <div id="app">
    <NavBar/>

    <div class="alert">
      <AlertForm v-bind:alert="alertState" v-if="alertState.visible" />
    </div>
    
    <div class="container">      
      <div class="row">
        <CardTemplate  
        v-for="(contact, index) in contacts" 
        v-bind:key='index' 
        v-bind:user='contact' 
        v-bind:index='index'        
        />
      </div>      
    </div>

    <FormTemplate v-if="formVisible"/>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import CardTemplate from './components/Card.vue'
import FormTemplate from './components/Form.vue'
import AlertForm from './components/Alert.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    CardTemplate,
    NavBar,
    FormTemplate,
    AlertForm
  },
  
  data(){
    return {
     basePath : `http://localhost:3000`,
    }
  },
  methods : {

  }, 

  computed : {
    contacts(){
      //return a store getter
     return this.$store.getters.getContacts;
    },

    formVisible(){
      return this.$store.state.form.visible;
    },

    alertState(){
      return this.$store.state.alert;
    },
    
  },
  created(){
    axios.get(`${this.basePath}/contacts`).then(({data})=>{
      return this.$store.commit('insertJsData', data)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

body{
  background-color: var(--bg);
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.page-title{
  display: flex;
  justify-content: center;
}

.md-bg {
  background-color: rgba(0,0,0,0.9);
  justify-content: center;
  position: fixed;
  top: 0;
  padding-top:30px;
  width: 100%;
  height: 100vh;
  z-index: 999;
}

:root{
  --navbar : #093640;
  --bg : #C1D4D9;
  --btn-one : #00D196;
  --btn-two : #A6033F;
  --r-colour : #F2B705;
}
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-icons/font/bootstrap-icons.css';
</style>



