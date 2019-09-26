<template>
    <div>
        <input type='text' v-model='msg'/>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg: 'A'
            }
        },
        mounted(){
            console.log('A-mounted')
        },
        activated(){
            console.log('A-activated')
        },
        deactivated(){
            console.log('A-deactivated')
        }
    }
</script>

<style lang='scss' scoped>

</style>