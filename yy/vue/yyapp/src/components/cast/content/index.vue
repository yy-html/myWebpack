<template>
	<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill='false' ref="loadmore">
		<ul>						<!--声明式导航 {path: '/castDetail', query: {id: item.id}} name + params是命名式路由跳转方式-->
			<router-link tag='li' :to='{name: "castDetail", params: {id: item.id}}' v-for='(item,index) in castList' :key='item.id'>
			<!--this.$store.state.cast.castList-->
				<img :src="item.avatars.small" :alt="item.alt" />---{{item.name}}---{{index + 1}}
			</router-link>
		</ul>
	</mt-loadmore>		
	<!--<ul>
		<li @click='goCastDetail(item.id)' v-for='(item,index) in castList' :key='item.id'>
			<img :src="item.avatars.small" :alt="item.alt" />---{{item.name}}---{{index + 1}}
		</li>
	</ul>
	goCastDetail(id){
		编程式导航：query传参（ ? ）
//			this.$router.push('/castDetail?id=' + id)
//			this.$router.push({ path: '/castDetail',query: {id}})

//			编程式导航：命名路由
//			this.$router.push('/castDetail/' + id)
			this.$router.push({name: 'castDetail',params: {id}})
	}-->
</template>

<script src='./script.js'></script>
<style src='./style.scss' lang='scss' scoped></style>