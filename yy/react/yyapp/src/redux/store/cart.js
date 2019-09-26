const cart = (state = {
	cartList: 0,
	totalPrice: 0
},{type,data}) => {
	switch(type){
		case 'CART_LIST': 
			state.cartList = data
			state.totalPrice = totalPrice(state.cartList)
			break
		case 'UPDATE_NUMBER':
			var {index,number} = data
			state.cartList[index].number = number,
			state.totalPrice = totalPrice(state.cartList)
			break
		case 'DELETE_CART':
			var {index} = data
			state.cartList[index].number = 0
			state.cartList.splice(index,1)
			state.totalPrice = totalPrice(state.cartList)
			break
	}
	
	return state
}

function totalPrice(data){
	var total = 0
	data.map( (item,index) => {
		total += item.number * item.price
	})
	return total
}
export default cart