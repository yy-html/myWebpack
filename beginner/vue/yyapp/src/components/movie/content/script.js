import {mapState,mapActions,mapMutations} from 'vuex'

export default {
	data(){
		return{
			msg: 'movie'
		}
	},
	computed: {
		...mapState({
			movieList: ( {movie} ) => movie.movieList.result
		})
	},
	methods: {
		...mapActions({
			getMovieList: 'getMovieList'
		})
	},
	mounted(){
		this.getMovieList()
	}
}