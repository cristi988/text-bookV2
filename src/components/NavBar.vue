<template>
    <nav class="navbar">
        <div class="container ">

            <div class="col-12 col-xl-4">
                <a class="navbar-brand text-light"> Contact Form</a>
            </div>

            <div class="col-12 col-xl-4 mt-2">
                <button class="btn btn-lg" v-on:click="showModal()">Add Contact</button>
            </div>

            <div class="col-12 col-xl-4 mt-2">
                <form class="form-inline">
                <input class=" form-control mr-sm-2 form-control-lg" type="search" placeholder="Search" aria-label="Search"
                v-on:keyup="search($event)">
                </form>
            </div>          
        
            
         </div>
    </nav>
</template>

<script>
export default {
    name : 'NavBar',

    methods : {

        /**
         * This function toggles the form and makes the edit false
         * 
         */
        showModal(){
            this.$store.commit('toggleForm');
            this.$store.state.form.edit = false;
        },


        /**
         * This function search for an event in the search bar
         * 
         */
        search(event){
            //trimitem valoare catre store cu search term
            this.$store.commit('setSearchTerm', event.target.value);
        }
    },
}
</script>

<style scoped>

    .form-inline {
        display: flex;
    }
    .btn {
        border-radius: 5px;
        background-color: var(--r-colour);
        color: black;
        font-size: 15px;
    }

    .navbar {
        background-color: var(--navbar);
        font-weight: bold;
    }

</style>