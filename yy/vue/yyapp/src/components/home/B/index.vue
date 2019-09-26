<template>
    <div>
        <input type='text' :value='msg'/>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg: 'B'
            }
        },
        mounted(){
            console.log('B-mounted')
        },
        activated(){
            console.log('B-activated')
        },
        deactivated(){
            console.log('B-deactivated')
        }
    }
</script>

<style lang='scss' scoped>

</style>