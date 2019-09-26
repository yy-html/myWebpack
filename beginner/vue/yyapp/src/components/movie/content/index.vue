<template>
	<ul>
		<li v-for='item in movieList' :key='item.id'>
			<img :src="item.images" alt="" />---{{item.title}}---{{item.year}}
		</li>
	</ul>
</template>

<script src='./script.js'></script>
<style src='./style.scss' lang='scss' scoped></style>