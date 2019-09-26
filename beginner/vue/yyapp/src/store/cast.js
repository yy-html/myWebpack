import castApi from '@/api/cast.js'

export default {
	state: {
		castList: [],
	},
	getters: {
		test(){
			var test = 'test'
			return test
		}
	},
	actions: {
		getCastList( {commit}, pageNum ){	//上下文对象 context == this ==  !==  Vuex.Sore实例
			console.log('cast	Action',this)
			castApi.getCast({
				pageNum,
				cb2: data => commit('changeCastList',data)
			})
		}
	},
	mutations: {
		changeCastList(state,data){	//state == this.state ==  !==  Vuex.Store实例.state
			state.castList = data
		},
		addCastList(state,data){
			state.castList = state.castList.concat(data)
//			state.castList = [...state.castList, ...data]
		}
	}
}