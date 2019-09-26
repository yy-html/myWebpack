import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import cast from './cast.js'
import movie from './movie.js'
import castDetail from './castDetail.js'
import cart from './cart.js'
import user from './user.js'

export default new Vuex.Store({
	modules: {
		cast,
		movie,
		castDetail,
		cart,
		user,
	}
})