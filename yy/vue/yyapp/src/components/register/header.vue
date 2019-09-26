<template>
    <header>
        <div @click='goback()'>back</div>
        <div>Register</div>
        <div></div>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        },
        methods:{
            goback(){
                this.$router.go(-1)
            }
        }, 
        mounted(){

        }
    }
</script>
    
<style scoped lang='scss'>
    header{
        width: 100%;
        height: .8rem;
        background: #ccc;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    div{
        text-align: center;
    }
    div:nth-child(1){
        width: .8rem;
        height: 100%;
        line-height: .8rem;
    }
    div:nth-child(3){
        width: .8rem;
        height: 100%;
    }
    div:nth-child(2){
        height: 100%;
        line-height: .8rem;
        flex: 1;
        font-size: .2rem;
    }
</style>