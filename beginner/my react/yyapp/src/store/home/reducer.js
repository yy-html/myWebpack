export default (state = {
	homeList: [],
},action) => {
	console.log('store-home',this)
	let newState = {...state}
	const {type,data} = action
	switch(type){
		case 'HOME_LIST': 
			newState.homeList = data
			break
	}
	
	return newState
}