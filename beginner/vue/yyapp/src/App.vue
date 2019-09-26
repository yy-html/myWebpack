<template>
  <div id="root" class='container'>
  	
    <router-view name='header'></router-view>
    
    <div class='content'>
   	 <router-view name='content'></router-view>
   	</div>
   	
   	
    <router-view name='footer'></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  		return{
  			msg: 'app'
  		}
  },
  mounted(){
  		console.log(this.msg,this)
  }
}
</script>

<style src='./main.scss' lang='scss'></style>
