import myAjax from './myAjax'
import {GOODS_LIST} from '@/server/index.js'

export default {
	getList(cb2){
		myAjax.fetchJsonp({
			url: GOODS_LIST,
			cb: data => cb2(data)
		})
	}
}