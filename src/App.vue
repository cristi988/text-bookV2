<template>
  <div id="app">
    <NavBar/>
      
      <div class="alert">
        <AlertForm v-bind:alertMsg="alert.message" v-if="alert.show" />
      </div>
      
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
import AlertForm from './components/Alert.vue'
// import axios from 'axios'
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
      contacts : [],
      alert : {
        show : false,
        message : 'Your contact has been created!'
      }
      
    }
  },
  methods : {
    addNewContact(formValue){
      this.contacts.push(formValue);
      this.alert.show = true;
      this.alert.message = 'message'

       setTimeout(()=>{
        this.alert.show = false;
        this.alert.message = '';
      }, 3000)
    },

    deleteContact(user, index){
      this.contacts = this.contacts.filter((item, key)=>{
        return key != index;
      })
    },
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

.page-title{
  display: flex;
  justify-content: center;
}

:root{
  --navbar : #093640;
  --bg : #C1D4D9;
  --btn-one : #00D196;
  --btn-two : #A6033F;
  --r-colour : #F2B705;
}
@import '~bootstrap/dist/css/bootstrap.css' 
</style>



