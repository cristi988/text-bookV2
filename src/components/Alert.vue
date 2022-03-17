<template>
    <div class="alerts">
        <div class="alert alert-success" role="alert">
                Your contact has been created!
        </div>
        <div class="alert alert-danger" role="alert">
            You have deleted a contact!
        </div>
    </div>
</template>

<script>
export default {
    name : 'AlertForm',
    props : {
        alertMsg : String,
    },

    methods : {
        
    }


}
</script>



<style scoped>

</style>