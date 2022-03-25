<template>
    <div class="md-bg">
        <form class="form w-50 mx-auto border bg-light border-dark p-3">
            <h2 v-if="form.edit">Edit Contact</h2>
            <h2 v-else>Add Contact</h2>
            <div class="  mb-3 w-75 mx-auto">
                <label for="fName" class="form-label w-100 text-start text-capitalize" >First Name</label>
                <input type="text" class="textCap form-control" id="fName" maxlength="20" v-model="form.data.fName" required>
            </div>
            <div class="mb-3 w-75 mx-auto">
                <label for="exampleInputEmail1" class="form-label w-100 text-start">Last Name</label>
                <input type="text" class=" textCap form-control" maxlength="20" v-model="form.data.lName" >
            </div>
            <div class="mb-3 w-75 mx-auto">
                <label for="exampleInputEmail1" class="form-label w-100 text-start">Phone Number</label>
                <input type="tel" class="form-control" maxlength="15" v-model="form.data.phone">
            </div>
            <div class="mb-3 w-75 mx-auto">
                <label for="exampleInputPassword1" class="form-label w-100 text-start">Email</label>
                <input type="email" class="form-control" maxlength="20" v-model="form.data.email">
            </div>
            <div class="mb-3 w-75 mx-auto">
                <label for="exampleInputEmail1" class="form-label w-100 text-start">Address</label>
                <input type="text" class="form-control" v-model="form.data.address">
            </div>
            <div class="mb-3 w-75 mx-auto d-flex justify-content-between">
                <button type="button" class="btn btn-dark" v-on:click="closeForm()">Close <i class="bi bi-x-circle"></i></button>
                <button type="button" class="btn btn-success "  v-on:click="saveDetails()" v-if="form.edit"> Update  <i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-info "  v-on:click="saveDetails()" v-else>Save Contact <i class="bi bi-box-arrow-down"></i></button>
            </div>
        </form>        
</div>
                
               
           
</template>


<script>
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
        }
    },

    methods : {
        saveDetails(){

            if(this.form.edit){
                this.$store.dispatch('updateContact', this.form.data);                
            }else{
                this.$store.dispatch('addContact', this.form.data);     
            }
          
        },

        closeForm(){
            this.$store.commit('toggleForm');
        },
    },

    computed : {

    },

    beforeMount(){
        this.form = this.$store.getters.getForm;
        this.form.data = this.$store.getters.getContactToBeEdited;
    },

    destroyed(){
        this.$store.commit('destroyForm');
    },

}
</script>


<style >
    .textCap {
        text-transform: capitalize;
    }

</style>