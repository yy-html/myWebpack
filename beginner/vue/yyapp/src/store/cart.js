import cartApi from '@/api/cart.js'

export default {
	state: {
		cartList: [],
		allSelect: false
	},
	getters: {
		total( {cartList} ){ //state.cartList
			let totalNum = 0
			let totalPrice = 0
			cartList.map( (item,index) => {
				if(item.flag){
					totalNum += item.num * 1
					totalPrice += item.price * item.num
				}
			})
			return {
				totalNum,
				totalPrice
			}
		}
	},
	actions: {
		getCartList( {commit} ){
			cartApi.getCart( data => commit('changeCartList',data) )
		},
		deleteCartList( {commit},{cartList,index} ){
			cartApi.deleteCart( {cartList,index}, data=> commit('changeCartList',cartList) )
		},
		allSelectList({commit},{cartList,type}){
			cartList.map( item => {
				item.flag = type
			})
			commit('changeCartList',cartList)
		},
		checkItemSelect({commit},cartList){
			var checked = true
			cartList.map( item => {
				!item.flag ? checked = false : null
			})
			commit('checkAllSelect',checked)
		}
	},
	mutations: {
		changeCartList(state,data){
			state.cartList = data
		},
		changeAllSelect(state){
			state.allSelect = !state.allSelect
		},
		checkAllSelect(state,checked){
			state.allSelect = checked
		}
	}
}