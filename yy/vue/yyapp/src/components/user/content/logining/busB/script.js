//import bus from '@/bus.js'

export default {
	props: ['fbusB'],
	data(){
		return{
			busBmsg: 'busB'
		}
	},
	methods: {
		fn(){
			this.busBmsg = 'busB2'
		}
	},
	computed: {
		
	},
	beforeCreate(){
		alert('busB-beforeCreate')
	},
	created(){
		alert('busB-created')
	},
	beforeMount(){
		alert('busB-beforeMount')
	},
	beforeUpdate(){
		alert('busB-beforeUpdate')
	},
	updated(){
		alert('busB-updated')
	},
	beforeDestroy(){
		alert('busB-beforedestroy')
	},
	destroyed(){
		alert('busB-destroyed')
	},
	mounted(){
		alert('busB-mounted')		
		this.$bus.$on('A-B', val => {
			this.busBmsg = val
			this.$bus.$emit('B-A','!')
		})
	}
}