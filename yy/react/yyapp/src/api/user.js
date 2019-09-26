import myAjax from './myAjax'
import {USER,GET_USER} from '@/server/index.js'

export default {
	LorR({status,userID,pwd},cb2){
		myAjax.fetch({
			url: USER + '?status=' + status + '&userID=' + userID + '&password=' + pwd,
			cb: data => cb2(data)
		})
	}
}