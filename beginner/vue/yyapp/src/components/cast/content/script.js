import {mapState,mapActions,mapMutations} from 'vuex'
import Vue from 'vue'
import {Loadmore,Toast} from 'mint-ui'
import castApi from '@/api/cast.js'
Vue.use(Loadmore)
Vue.use(Toast)

export default {
	data(){
		return{
			msg: 'cast',
			allLoaded: false,
			pageNum: 1
		}
	},
	computed: {
		...mapState({
			castList: ( {cast} ) => cast.castList //state == this.$store.state
		})
	},
	methods: {
		...mapActions({
			getCastList: 'getCastList'
		}),
		loadTop(){
			this.getCastList(0)
			this.$refs.loadmore.onTopLoaded()
		},
		loadBottom(){
			++ this.pageNum
			castApi.getCast({
				pageNum: this.pageNum,
				cb2: data => {
					if(data.length == 0){
						this.allLoaded = true
						this.pageNum = 1
						Toast('Loaded All!')
					}
					this.$store.commit('addCastList',data)
				}
			})
			this.$refs.loadmore.onBottomLoaded()
		},
	},
	mounted(){
		console.log(this.msg,this)
//		this.$store.dispatch('getCastList')
		this.getCastList(0)
	}
}