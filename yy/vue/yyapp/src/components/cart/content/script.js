import {mapState,mapActions} from 'vuex'

export default {
	data(){
		return{
			msg: 'cart',
			flag: '',
			
		}
	},
	methods: {
		...mapActions({
			getCartList: 'getCartList',
			deleteCartList: 'deleteCartList',
			allSelectList: 'allSelectList',
			checkItemSelect: 'checkItemSelect'
		}),
		deleteItem(cartList,index){
			this.deleteCartList({cartList,index})
		},
		allSelectFn(cartList){
			this.$store.commit('changeAllSelect')
			
			var type = this.$store.state.cart.allSelect
			this.allSelectList({cartList,type})
		},
		itemSelect(cartList){
			this.checkItemSelect(cartList)
		}
	},
	computed: {
		...mapState({
			cartList: ( {cart} ) => cart.cartList,
			allSelect: ( {cart} ) => cart.allSelect
		})
	},
	mounted(){
		this.getCartList()
		console.log('cart',this)
	}
}