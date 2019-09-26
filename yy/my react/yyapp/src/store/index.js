import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import homeReducer from './home/reducer'
import testReducer from './test/reducer'

const logger = createLogger()

const reducer = combineReducers({
	homeReducer,
	testReducer
})

const store = createStore(reducer,applyMiddleware(thunk,logger))

export default store

// const createStore = (reducer) => {
// 	let state;
// 	let listeners = [];
  
// 	const getState = () => state;
  
// 	const dispatch = (action) => {
// 	  state = reducer(state, action);
// 	  listeners.forEach(listener => listener());
// 	};
  
// 	const subscribe = (listener) => {
// 	  listeners.push(listener);
// 	  return () => {
// 		listeners = listeners.filter(l => l !== listener);
// 	  }
// 	};
  
// 	dispatch({});
  
// 	return { getState, dispatch, subscribe };
//   };