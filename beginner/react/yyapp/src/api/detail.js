import myAjax from './myAjax.js'
import {GOODS_LIST,UPDATE_CART} from '@/server/index.js'

export default {
	getList(id,cb2){
		myAjax.fetchJsonp({
			url: GOODS_LIST + '?goodsID=' + id,
			cb: data => cb2(data)
		})
	}
}