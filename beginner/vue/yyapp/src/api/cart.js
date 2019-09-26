import myAjax from './myAjax'

export default {
	getCart(cb2){
		var data = [
			{id:1,name:'good1',num:1,price:40},
			{id:2,name:'good2',num:2,price:30},
			{id:3,name:'good3',num:3,price:20},
			{id:4,name:'good4',num:4,price:30},
		]
		data.map( item => {
			item.flag = false
		})
		cb2(data)
	},
	deleteCart({cartList,index},cb2){
		console.log(cartList)
		cartList.splice(index,1)
		cb2(cartList)
	}
}