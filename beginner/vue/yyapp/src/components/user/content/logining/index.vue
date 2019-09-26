<template>
	<div>
		{{msg}}
		<br />
		<button @click='hideB()'>hideB</button>
		<br />
		<bus-A ref='busA' :fbusA='msg'></bus-A>
		<bus-B ref='busB' :fbusB='msg' v-if='hide'></bus-B>
		<br />
		v-if会完全销毁组件 执行初始化和销毁阶段生命周期 v-show则只是简单的display的切换
		v-if是真正的条件渲染 页面加载的时候会根据真假来判断是否渲染 v-show不管初始条件为真为假都会渲染到页面 再根据真假来改变display
		所以v-if有更高的切换开销 v-show有更高的渲染开销
	</div>
</template>

<script src='./script.js'></script>
<style src='./style.scss' lang='scss'></style>