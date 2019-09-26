const testReducer = (state = {
	classList: [],
	list2: 0,
	test: 0,
	list: [
		{count: 5},
		{count: 2},
		{count: 4}
	]
},action) => {
	console.log('store-test',this)
	let newState = {...state}
	const {type,data} = action
	switch(type){
		case 'TEST': 
			newState.classList = data
			break
		case 'TEST2': 
			newState.list2 = data
			break
		case 'TEST3':
			newState.test = data
	}
	
	return newState
}
export default testReducer