<template>
    <div class="md-bg">
        <form class="form mx-auto border bg-light border-dark p-3 rounded mt-5">
            <h2 v-if="form.edit">Edit Contact</h2>
            <h2 v-else>Add Contact</h2>
            <div class=" mb-3 w-100 mx-auto">
                <label  class="form-label w-100 text-start text-capitalize text-lg" >First Name</label>

                <input required type="text" class="textCap form-control" id="fName" maxlength="20" v-model="form.data.fName">

                <label class="text-danger d-flex justify-content-start" v-if="errors.fNameError" > {{errors.fNameError}} </label>
            </div> 
            <div class="mb-3 w-100 mx-auto">
                <label  class="form-label w-100 text-start">Last Name</label>

                <input type="text" class=" textCap form-control" maxlength="20" v-model="form.data.lName" >

                <label class="text-danger d-flex justify-content-start">{{errors.lNameError}}</label>
            </div>
            <div class="mb-3 w-100 mx-auto">
                <label  class="form-label w-100 text-start">Phone Number</label>

                <input type="tel" class="form-control" maxlength="15" v-model="form.data.phone">

                <label class="text-danger d-flex justify-content-start"> {{errors.phoneError}} </label>
            </div>
            <div class="mb-3 w-100 mx-auto">
                <label  class="form-label w-100 text-start">Email</label>

                <input type="email" class="form-control" maxlength="50" v-model="form.data.email">

                <label class="text-danger d-flex justify-content-start"> {{errors.emailError}} </label>
            </div>
            <div class="mb-3 w-100 mx-auto">
                <label  class="form-label w-100 text-start">Address</label>

                <input type="text" class="form-control" v-model="form.data.address">

                <label class="text-danger d-flex justify-content-start">{{errors.addressError}} </label>
            </div>
            <div class="mb-3 w-100 mx-auto d-flex justify-content-between">
                <button type="button" class="btn btn-dark" v-on:click="closeForm()">Close <i class="bi bi-x-circle"></i></button>
                <button type="button" class="btn btn-success "  v-on:click="saveDetails()" v-if="form.edit"> Update  <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-info "  v-on:click="saveDetails()" v-else>Save Contact <i class="bi bi-box-arrow-down"></i></button>
            </div>
        </form>        
</div>
                
               
           
</template>


<script>
import Validator from '../services/formValidation.js'
export default {
    name : 'FormTemplate',

    data(){
        return {
            form : {
                data : {
                    fName : "",
                    lName : "",
                    phone : "",
                    email : "",
                    address : "",  
                },
                visible : false,
                edit : false,             
            },
            errors : {
                // fNameError : '',
                // lNameError : '',
                // phoneError : '',
                // emailError : '',
                // addressError : '',
            } 
        }
    },

    methods : {
        /**
         * This function save the details whether the "Add contact" or "Edit" button is pressed
         * 
         */
        saveDetails(){
           const validator  = new Validator(this.form.data);
            validator.validate()

           if(!validator.isValid) {
               this.errors = validator.getErrors();
               return 
           }
            if(this.form.edit){
                this.$store.dispatch('updateContact', this.form.data);                
            }else{
                this.$store.dispatch('addContact',this.form.data);     
            }
          
        },

        /**
         * This form closes the form and contact cards
         * 
         */
        closeForm(){
            this.$store.commit('toggleForm');
        },
    },

    computed : {

    },

    /**
     * This function 
     * 
     */
    beforeMount(){
        this.form = this.$store.getters.getForm;
        this.form.data = this.$store.getters.getContactToBeEdited;
    },

    /**
     * This form destroys the objects from the form and contact
     * 
     */
    destroyed(){
        this.$store.commit('destroyForm');
    },

}
</script>


<style >
    @media (max-width: 991.98px) { 
        .form { 
            width : 75% !important;
        }
    }

    .textCap {
        text-transform: capitalize;
    }
    .form {
        width: 30%;
    }    
</style>