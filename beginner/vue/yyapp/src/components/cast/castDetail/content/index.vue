<template>
	<ul>
		<transition name='my'>
		<li v-for='item in castDetailList' :key='item.id'>
			<img :src="item.avatars.small" alt="" />
			<br />
			{{item.name}}
			<br />
			{{$route.params.id}} <!--不能加this-->
			<br />
		</li>
		</transition>
	</ul>
</template>

<script src='./script.js'></script>
<style src='./style.scss' lang='scss' scoped></style>