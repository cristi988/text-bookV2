<template>
    <div class="alerts">
        <div class="alert" v-bind:class=alertMsg.class role="alert">
                {{alertMsg.message}}
        </div>
    </div>
</template>

<script>
export default {
    name : 'AlertForm',
    props : {
        alertMsg : Object
    },

    methods : {
        
    }


}
</script>



<style scoped>

</style>