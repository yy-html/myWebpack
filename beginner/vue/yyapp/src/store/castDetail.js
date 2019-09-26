import castApi from '@/api/cast.js'

export default {
	state: {
		castDetailList: [],
	},
	getters: {
		
	},
	actions: {
		getCastDetailList( {commit},id ){
			castApi.getCastDetail(id, data => commit('changeCastDetailList',data) )
		}
	},
	mutations: {
		changeCastDetailList( state ,data){
			state.castDetailList = data
		}
	}
}