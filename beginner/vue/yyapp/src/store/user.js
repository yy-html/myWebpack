export default {
    state: {
        test: 0,
        list: 0
    },
    actions: {
        test(context){
            context.commit('changeTest',1)
        }
    },
    getters: {

    },
    mutations: {
        changeTest(state,data){
            state.test = data
        },
        changeList(state,data){
            state.list = data
        }
    }
}