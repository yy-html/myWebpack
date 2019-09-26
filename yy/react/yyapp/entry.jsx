import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import store from '@/redux/store/index.js'

import './main.scss'

import App from '@/components/main/index.jsx'
import ErrorBoundary from '@/components/ErrorBoundary/index.jsx'
import Register from '@/components/register/index.jsx'
import GoodsDetail from '@/components/goodsDetail/index.jsx'
import Login from '@/components/login/index.jsx'
import NotFound from '@/components/notfound/index.jsx'

function render(){
	ReactDOM.render(
		<ErrorBoundary>
			<Router>
				<Switch>
					<Route path='/goodsDetail/:goodsID/:goodsName'  component={GoodsDetail} />
					<Route path='/login' 							component={Login} />
					<Route path='/register' 						component={Register} />
					<Route path='/index' 							component={App} />
					<Redirect exact from='/' to='/index' />
				</Switch>
			</Router>
		</ErrorBoundary>,
		document.getElementById('root')
	)
}
render()
console.log('createStore(reducer)',store)
store.subscribe(render)

//redux.crateStore(reducer).subscribe(render)