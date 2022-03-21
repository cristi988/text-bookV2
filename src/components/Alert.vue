<template>
    <div class="alerts w-100 mx-auto ">
        <div class="alert" v-bind:class=alert.typeClass  role="alert">
                {{alert.msg}}
        </div>
       </div>
</template>

<script>
export default {
    name : 'AlertForm',
    props : {
        alert :Object
    },

    methods : {
        
    },
    mounted(){
        console.log(this.alert)
    }


}
</script>



<style scoped>
    .alerts{
        position: fixed;

    }
</style>