<template>
    <div>
        <div v-if='this.$store.state.user.list == 0'>
            Loading
        </div>
        <ul>
            <li v-for='(item,index) in this.$store.state.user.list' :key='index'>
                {{item.className}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list: 0
            }
        },
        created(){
            this.getData()
        },
        methods: {
            getData(){
                fetch('http://datainfo.duapp.com/shopdata/getclass.php')
                .then( res => res.json() )
                .then( data => {
                    console.log(data)
                    // this.list = data
                    this.$store.commit('changeList',data)
                })
                .catch( e => console.log(e) )
            }
        },
        mounted(){
            // fetch('http://datainfo.duapp.com/shopdata/getclass.php')
            //     .then( res => res.json() )
            //     .then( data => {
            //         console.log(data)
            //         // this.list = data
            //         this.$store.commit('changeList',data)
            //     })
            //     .catch( e => console.log(e) )
        }
    }
</script>

<style>

</style>