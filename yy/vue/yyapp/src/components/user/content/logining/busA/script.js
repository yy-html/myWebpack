//import bus from '@/bus.js'

export default {
	props: ['fbusA'],
	data(){
		return{
			busAmsg: 'busA'
		}
	},
	methods: {
		fn(){
			this.$bus.$emit('A-B','?')
		}
	},
	computed: {
		
	},
	beforeCreate(){
		alert('busA-beforeCreate')
	},
	created(){
		alert('busA-created')
	},
	beforeMount(){
		alert('busA-beforeMount')
	},
	beforeUpdate(){
		alert('busA-beforeUpdate')
	},
	updated(){
		alert('busA-updated')
	},
	beforeDestroy(){
		alert('busA-beforedestroy')
	},
	destroyed(){
		alert('busA-destroyed')
	},
	mounted(){
		alert('busA-mounted')
		this.$bus.$on('B-A', val => {
			this.busAmsg = val
		})
	}
}