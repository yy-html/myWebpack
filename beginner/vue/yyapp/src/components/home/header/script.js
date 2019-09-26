export default {
	data(){
		return{
			vueUser: sessionStorage.vueUser || '未登陆'
		}
	},
	methods: {
		tologin(){
			this.vueUser === '未登陆'
				? this.$router.push('login')
				: this.$router.push('user')
		}
	},
	computed: {
		
	},
	mounted(){
		
	}
}