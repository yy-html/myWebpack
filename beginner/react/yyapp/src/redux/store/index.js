import {createStore, combineReducers} from 'redux'  //创建一个单一数据源的方法

import home from './home.js'
import classify from './classify.js'
import detail from './detail.js'
import cart from './cart.js'

//reducer：描述action如何改变状态的一个纯函数：使用纯函数来进行修改
const reducer = combineReducers({
	home,
	classify,
	detail,
	cart
})

export default createStore(reducer) //创建store