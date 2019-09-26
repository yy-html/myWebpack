import movieApi from '@/api/movie.js'

export default {
	state: {
		movieList: [],
	},
	getters: {
		
	},
	actions: {
		getMovieList( {commit} ){
			movieApi.getMovie( data => commit('changeMovieList',data) )
		}
	},
	mutations: {
		changeMovieList(state,data){
			state.movieList = data
		}
	}
}