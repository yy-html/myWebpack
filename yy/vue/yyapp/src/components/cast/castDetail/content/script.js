import {mapState,mapActions,mapMutations} from 'vuex'

export default {
	data(){
		return{
			msg: 'castDetail',
		}
	},
	computed: {
		...mapState({
			castDetailList: ( {castDetail} ) => castDetail.castDetailList
		}),
	},
	methods: {
		...mapActions({
			getCastDetailList: 'getCastDetailList'
		}),
	},
	mounted(){
//		var { id } = this.$route.query  //？id=id 方式用query接收；命名路由传参用params接收
		var { id } = this.$route.params
		this.getCastDetailList(id)
		console.log(this.msg,this)
	}
}