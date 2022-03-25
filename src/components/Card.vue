<template>
    <div class="card mx-3 mt-5 shadow p-3 mb-5 bg-white rounded " style="width: 25rem;">
        <div class="card-body">
            <h5 class="textCap card-title text-start ">{{user.fName}} {{user.lName}}</h5>
            <hr>
            <p class="card-text text-start"><i class=" bi bi-envelope"></i> {{user.email}} </p>
            <p class="card-text text-start"><i class="bi bi-telephone"></i> {{user.phone}} </p>
            <p class="card-text text-start"><i class="bi bi-geo-alt"></i> {{user.address | toString}} </p>

            <div class="mt-3 mb-1 pt-2 w-100 mx-auto d-flex justify-content-between">
                <button class="btn btn-danger " v-on:click='deleteContact()'>Delete <i class="bi bi-trash"></i></button>
                <button class="btn btn-primary " v-on:click='editContact()'>Edit <i class="bi bi-pencil-square"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'CardTemplate',
    props : {
        user : Object,
        index : Number,
    },

    filters : {
        toString(value){
            return value;
        }
    },

    methods : {
        /**
         * This function deletes the contact fomr the card
         * 
         */
        deleteContact(){
            this.$store.dispatch('deleteContact', this.user);
        },

        /**
         * This function edits the contact in the cards
         * 
         */
        editContact(){
            this.$store.commit('editContact', this.user);
            this.$store.commit('toggleForm');
        }
    },    
}
</script>


<style scoped>
    .textCap {
        text-transform: capitalize;
        font-size: 30px;
        font-weight: bold;
    }
</style>