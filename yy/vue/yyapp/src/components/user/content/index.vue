<template>
	<div>
		<button @click='fn'>{{msg}}</button>
		<p>this.$store.state.user.test：{{this.$store.state.user.test}}</p>
		<br />
		<router-link tag='li' to='/user/logining' ref='router-link1'>logining</router-link> 
		<router-link tag='li' to='/user/nologin' ref='router-link2'>nologin</router-link>
		<hr />
		<router-view name='user'></router-view>
	</div>
</template>

<script src='./script.js'></script>
<style src='./style.scss' lang='scss'></style>