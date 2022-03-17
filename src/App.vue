<template>
  <div id="app">
    <NavBar/>
    
    <div class="container ">
      <div class="row">
        <CardTemplate  
        v-for="(contact, index) in contacts" 
        v-bind:key='index' 
        v-bind:user='contact' 
        v-on:deleteContact='deleteContact'
        v-bind:index='index'/>
      </div>      
    </div>    
      
      <FormTemplate v-on:fromForm='addNewContact' />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import CardTemplate from './components/Card.vue'
import FormTemplate from './components/Form.vue'
// import axios from 'axios'
export default {
  name: 'App',
  components: {
    CardTemplate,
    NavBar,
    FormTemplate
  },
  
  data(){
    return {
      contacts : [],
      
    }
  },
  methods : {
    addNewContact(formValue){
      this.contacts.push(formValue);
    },
    deleteContact(user, index){
      this.contacts = this.contacts.filter((item, key)=>{
        return key != index;
      })
    }
  },  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  background-color: var(--bg);
}

.row {
  display: flex;
  flex-wrap: wrap;
}

:root{
  --navbar : #7B89A8;
  --bg : #CBF5F4;
  --btn-one : #7BA885;
  --btn-two : #B8CBF5;
  --r-colour : #BFF5CC;
}

@import '~bootstrap/dist/css/bootstrap.css' 
</style>
