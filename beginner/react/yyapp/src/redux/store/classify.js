const classify = (state = {
	classList: [],
	menuList: []
},action) => {
	const {type,data} = action
	switch(type){
		case 'CLASS_LIST': state.classList = data;break;
		case 'MENU_LIST': state.menuList = data;break;
	}
	
	return state
}

export default classify