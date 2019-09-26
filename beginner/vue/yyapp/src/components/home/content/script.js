import Vue from 'vue'
import {Swipe} from 'mint-ui'
import A from '../A/'
import B from '../B/'
import Request from '../request/'
//Vue.component(Swipe.name, Swipe)
Vue.use(Swipe)
var Son = {
	data(){
		return{
			msg: 'son'
		}
	},
	template: `<div>
				{{msg}}
				<br>
				slot1：<slot name='slot1'></slot>
				<br>
				slot2：<slot name='slot2'></slot>
				<br>
				slotOther：<slot>默认内容</slot>
			   </div>`,
}

export default {
	data(){
		return{
			msg: 'home',
			comp: 'v-a'
		}
	},
	components: {
		'v-son': Son,
		'v-a': A,
		'v-b': B,
		'v-request': Request
	},
	methods: {
		change(index){
			console.log(index)
		}
	},
	computed: {
		
	},
	mounted(){
		console.log(this)
	}
}