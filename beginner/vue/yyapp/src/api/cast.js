import myAjax from './myAjax.js'

export default {
	getCast(config){
		myAjax.get({
			url: 'local/api/castpage',
			params: {params: {
				limitNum: 5,
				pageNum: config.pageNum
			}},
			cb: data => config.cb2(data)
		})
	},
	getCastDetail(id,cb2){
		myAjax.get({
			url: 'http://localhost:3000/api/castDetail',
			params: {params: {
				castid: id
			}},
			cb: data => cb2(data)
		})
	}
}