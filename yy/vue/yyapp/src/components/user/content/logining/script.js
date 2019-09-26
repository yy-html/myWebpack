import busA from './busA'
import busB from './busB'

export default {
	data(){
		return{
			msg: 'logining',
			hide: true
		}
	},
	components: {
		'bus-A': busA,
		'bus-B': busB
	},
	methods: {
		hideB(){
			this.hide = this.hide ? false : true
		}
	},
	computed: {
		
	},
	beforeCreate(){
		alert('logining-beforeCreate')
	},
	created(){
		alert('logining-created')
	},
	beforeMount(){
		alert('logining-beforeMount')
	},
	beforeUpdate(){
		alert('logining-beforeUpdate')
	},
	updated(){
		alert('logining-updated')
	},
	beforeDestroy(){
		alert('logining-beforedestroy')
	},
	destroyed(){
		alert('logining-destroyed')
	},
	mounted(){
		this.msg = 'logining2'
		alert('logining-mounted')		
		console.log('logining',this)
	}
}