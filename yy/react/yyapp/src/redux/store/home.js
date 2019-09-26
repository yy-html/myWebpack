const home = (state = {
	homeList: [1,2,3,4],
},action) => {
	const {type,data} = action
	if(type == 'HOME_LIST'){
		state.homeList = data
	}
	
	return state
}
	
export default home