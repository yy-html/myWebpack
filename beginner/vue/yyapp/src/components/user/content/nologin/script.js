export default {
	data(){
		return{
			msg: 'nologin'
		}
	},
	methods: {
		
	},
	computed: {
		
	},
	beforeCreate(){
		alert('nologin-beforeCreate')
	},
	created(){
		alert('nologin-created')
	},
	beforeMount(){
		alert('nologin-beforeMount')
	},
	beforeUpdate(){
		alert('nologin-beforeUpdate')
	},
	updated(){
		alert('nologin-updated')
	},
	beforeDestroy(){
		alert('nologin-beforedestroy')
	},
	destroyed(){
		alert('nologin-destroyed')
	},
	mounted(){
		alert('nologin-mounted')
	}
}