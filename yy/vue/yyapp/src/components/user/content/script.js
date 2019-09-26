export default {
//	组件内的守卫
	beforeRouteEnter(to, from, next){
		var r = confirm('1？')
		r ? localStorage.userCode = 1 : localStorage.userCode = 0
		console.log(localStorage)
		r && localStorage.userCode == 1 ? next() : next(false)
		
//		localStorage(key,value)
//		localStorage.key = value //覆盖 设置
//		localStorage[key] = value
//		localStorage.removeItem(key)
//		localStorage.getItem(key)
//		localStorage.clear()
//		localStorage.length
	},
	beforeRouteLeave(to, from, next){
		next()
	},
	data(){
		return{
			msg: 'user'
		}
	},
	methods: {
		fn(){
			this.msg = 'user2'
			this.$store.dispatch('test')
		}
	},
	computed: {
		
	},
	beforeCreate(){
		alert('user-beforeCreate')
	},
	created(){
		alert('user-created')
	},
	beforeMount(){
		alert('user-beforeMount')
	},
	beforeUpdate(){
		alert('user-beforeUpdate')
	},
	updated(){
		alert('user-updated')
	},
	beforeDestroy(){
		alert('user-beforedestroy')
	},
	destroyed(){
		alert('user-destroyed')		
	},
	mounted(){
		alert('user-mounted')
		console.log('user',this)
	}
}