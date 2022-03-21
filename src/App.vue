<template>
  <div id="app">
    <NavBar v-on:showModal='modalShow'/>

    <div class="alert">
      <AlertForm v-bind:alert="alert" v-if="alert.show" />
    </div>
    
    <div class="container">      
      <div class="row">
        <CardTemplate  
        v-for="(contact, index) in contacts" 
        v-bind:key='index' 
        v-bind:user='contact' 
        v-on:deleteContact='deleteContact'
        v-bind:index='index'
        v-on:editContact='onContactEdit'
        />
      </div>      
    </div>

    <FormTemplate 
    v-on:fromForm='addNewContact' 
    v-bind:contactDetails='toEdit.details'
    v-bind:key=toEdit.i
    v-on:closeForm='onCloseForm'
    v-if="modal"/>
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
        msg : '',
        typeClass : ''
      },
      toEdit : {
        i : null,
        details : {}
      },
      modal : false,
      
    }
  },
  methods : {
    addNewContact(formValue){
      let result = this.contacts.filter((contact)=>{
        return contact == formValue;
      })
      if(result.length < 1){
       this.contacts.push(formValue);
       this.toEdit = {};
      }
      this.toEdit = {};      
      this.modal = false;
      this.alert.show = true;
      this.alert.msg = 'Your contact has been created!'
      this.alert.typeClass = 'alert-success'
       setTimeout(()=>{
        this.alert.show = false;
      }, 3000)
    },

    deleteContact(user, index){
      this.contacts = this.contacts.filter((item, key)=>{
        return key != index;
      })

      this.alert.show = true;
      this.alert.msg = 'You contact has been deleted!';
      this.alert.typeClass = 'alert-danger';

      setTimeout(()=>{
        this.alert.show = false;
      }, 3000)
    },

    onContactEdit(index){
      this.toEdit.i = index;
      this.toEdit.details = this.contacts[index];
      this.modal = true;
    
    },

    onCloseForm(){
      this.modal = false;
    },

    modalShow(){
      this.modal = true;
      console.log(this.modal)
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
  /* display: flex; */
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
@import '~bootstrap/dist/css/bootstrap.css' 
</style>



