<template>
    <div class="alerts w-100 mx-auto ">
        <!-- <div class="alert" v-bind:class=alert.typeClass  role="alert">
                {{alert.msg}}
        </div> -->
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
        this.$toast.success(this.alert.msg, {        
        position: "bottom-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
        });
    }
}
</script>



<style scoped>
    .alerts{
        position: absolute;

    }
</style>