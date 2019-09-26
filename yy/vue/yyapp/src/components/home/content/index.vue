<template>
	<div>
		<mt-swipe :auto="2000" @change='change'>
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>

		<v-son>
			<span slot='slot1'>slot1Test</span>
			<span slot='slot2'>slot2Test</span>
			<span>slotOtherTest</span>---<span>slotOthersTest</span>
		</v-son>

		<button @click='comp = "v-a"'>v-a</button>&nbsp;&nbsp;&nbsp;&nbsp;
		<button @click='comp = "v-b"'>v-b</button>
		<keep-alive>
			<component :is='comp'></component>
		</keep-alive>

		<v-request />
	</div>
</template>

<script src='./script.js'></script>
<style src='./style.scss' lang='scss'></style>