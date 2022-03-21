<template>
    <div class="card mx-3 mt-5" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{user.fName}}</h5>
            <h5 class="card-title">{{user.lName}}</h5>
            <p class="card-text"> {{user.email}} </p>
            <p class="card-text"> {{user.phone}} </p>
            <p class="card-text"> {{user.address | toString}} </p>
            <div class="control-buttons">
                <button class="delete" v-on:click='deleteContact()'>Delete</button>
                <button class="edit" v-on:click='editContact()'>Edit</button>
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
        deleteContact(){
            this.$store.dispatch('deleteContact', this.user);
        },

        editContact(){
            this.$store.commit('editContact', this.user);
            this.$store.commit('toggleForm');
        }
    },    
}
</script>


<style scoped>
    .delete{
        background-color: var(--btn-two)
    }

    .edit{
        background-color: var(--btn-one)
    }

    .delete, .edit {
        border-radius: 5px;
        border: none;
        color: white;
        font-weight: bold;
    }

    .control-buttons{
       display: flex;
       justify-content: space-around;
       font-size: 20px;
    }

</style>