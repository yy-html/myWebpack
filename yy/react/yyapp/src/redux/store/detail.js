const detail = (state = {
	detailList: [],
},action) => {
	const {type,data} = action
	switch(type){
		case 'DETAIL_LIST':
			state.detailList = data
			return state
		default: return state
	}
}

export default detail