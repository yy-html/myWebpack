<template>
	<div>
		<p>All select：<input type="checkbox" @change='allSelectFn(cartList)' v-model='allSelect' /></p>
		<ul>
			<li v-for='(item,index) in cartList' :key='item.id'>
				<input type="checkbox" v-model='item.flag' @change='itemSelect(cartList)' />---{{item.name}}---{{item.price}}---{{item.num}}---<button @click='deleteItem(cartList,index)'>delete</button>
			</li>
		</ul>
		<br />
		<p>总数：{{this.$store.getters.total.totalNum}}</p>
		<p>总价：{{this.$store.getters.total.totalPrice}}</p>
	</div>
</template>

<script src='./script.js'></script>
<style src='./style.scss' lang='scss'></style>