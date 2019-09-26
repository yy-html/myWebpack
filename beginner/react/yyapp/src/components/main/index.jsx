import React, {Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import MainFooter from '@/components/mainfooter/index.jsx'
import Home from '@/components/main/home/index.jsx'
import Cart from '@/components/main/cart/index.jsx'
import Classify from '@/components/main/classify/index.jsx'
import Goods from '@/components/main/goods/index.jsx'
import User from '@/components/main/user/index.jsx'
import NotFound from '@/components/notfound/index.jsx'

export default class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'App'
		}
	}
	
	render(){
		console.log(this.state.msg,this)
		let props = this.props
		return (
			<div className='container'>
				<Switch>
					<Route path={`${props.match.path}/home/`} component={Home} />
					<Route path={`${props.match.path}/cart`} component={Cart} />
					<Route path={`${props.match.path}/classify`} component={Classify} />
					<Route path={`${props.match.path}/goods`} component={Goods} />
					<Route path={`${props.match.path}/user`} component={User} />
					<Redirect 
						exact 
						from={props.match.path}
						to= { {pathname: `${props.match.path}/home/`,state: {a:1,b:2}} } 
					/>
					<Route component={NotFound} />
				</Switch>
				<MainFooter router={props}/>
			</div>
		)
	}
}
//<div className='container'>
//	<div className='main'>
//		<header>
//			header
//		</header>
//		<div className='content'>
//			content
//		</div>
//	</div>
//	<footer>
//		footer
//	</footer>
//</div>

