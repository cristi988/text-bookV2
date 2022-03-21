<template>
    <div class="md-bg">
        <form class="form w-50 mx-auto border bg-light border-dark p-3">
            <div class="mb-3 w-75 mx-auto">
                <label for="fName" class="form-label">First Name</label>
                <input type="test" class="form-control" id="fName" v-model="form.fName">
                
            </div>
            <div class="mb-3 w-75 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                <input type="text" class="form-control" v-model="form.lName">
            </div>
            <div class="mb-3 w-75 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                <input type="text" class="form-control" v-model="form.phone">
            </div>
            <div class="mb-3 w-75 mx-auto">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="form.email">
            </div>
            <div class="mb-3 w-75 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Address</label>
                <input type="text" class="form-control" v-model="form.address">
            </div>
            <div>
                <button type="button" class="btn btn-secondary" v-on:click="closeForm()">Close</button>
                <button type="button" class="btn btn-primary"  v-on:click="saveDetails()">Save Details</button>
            </div>
        </form>        
</div>
                
               
           
</template>


<script>
export default {
    name : 'FormTemplate',
    props:{
        contactDetails : Object,
    },

    data(){
        return {
            form : {
                fName : "",
                lName : "",
                phone : "",
                email : "",
                address : "",
            },
           
        }
    },

    methods : {
        saveDetails(){
            this.$emit('fromForm', this.form);
            this.form = {};
        },

        closeForm(){
            this.$emit('closeForm')
        },
    },

    mounted(){
        if(this.contactDetails){
            this.form = this.contactDetails;
            console.log(this.contactDetails)
        }      
    },


}
</script>





<style >
    

</style>