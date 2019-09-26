import myAjax from './myAjax.js'
import {UPDATE_CART,GET_CART} from '@/server/index.js'

export default {
	updateCart({userID,goodsID,number},cb2){
		myAjax.fetch({
			url: UPDATE_CART + '?userID=' + userID + '&goodsID=' + goodsID + '&number=' + number,
			cb: data => cb2(data)
		})
	},
	getCart(userID,cb2){
		myAjax.fetchJsonp({
			url: GET_CART + '?userID=' + userID,
			cb: data => cb2(data)
		})
	}
}
