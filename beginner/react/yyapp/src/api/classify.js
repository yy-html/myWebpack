import myAjax from './myAjax.js'
import {CLASSIFY_LIST,GOODS_LIST} from '@/server/index.js'

export default {
	getList(cb2){
		if(localStorage.menuList){
			var data = JSON.parse(localStorage.menuList)
			cb2(data)
			return 
		}
		myAjax.fetch({
			url: CLASSIFY_LIST,
			cb: data => {
					localStorage.menuList = JSON.stringify(data)
					cb2(data)
				}
		})
	},
	getClassList(classID,cb2){
		myAjax.fetchJsonp({
			url: GOODS_LIST + '?classID=' + classID,
			cb: data => cb2(data)
		})
	}
}