import myAjax from './myAjax.js'

export default {
	getMovie(cb2){
		myAjax.get({
			url: 'local/api/movie',
			params: '',
			cb: data => cb2(data)
		})
	}
}