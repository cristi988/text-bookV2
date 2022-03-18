<template>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Contact Form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="fName" class="form-label">First Name</label>
                            <input type="test" class="form-control" id="fName" v-model="form.fName">
                            <label for="">xx</label>
                            <input type="text" class="form-control" v-model="fName">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Last Name</label>
                            <input type="text" class="form-control" v-model="form.lName">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" v-model="form.phone">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="email" class="form-control" v-model="form.email">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Address</label>
                            <input type="text" class="form-control" v-model="form.address">
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="saveDetails()">Save Details</button>
                </div>
                </div>
            </div>
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
            fName:''
        }
    },

    methods : {
        saveDetails(){
            this.$emit('fromForm', this.form);
            this.form = {};
        },
    },

    mounted(){
        if(this.contactDetails){
            this.form = this.contactDetails;
            this.fName = this.contactDetails.fName
            console.log(this.contactDetails)
        }
      
    }
}
</script>





<style scoped>

</style>