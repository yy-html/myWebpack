import React, {Component} from 'react'
import Header from './header/index.js'

export default class User extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'User'
		}
	}
	
	//检验登陆
	componentWillMount(){
		!sessionStorage.myUser 
			? this.props.history.push('/login')
			: null
	}
	
	render(){
		console.log(this.state.msg,this)
		
		return (
				<div className='main'>
					<Header />
					<div className='content'>
						<div>
							欢迎您，{sessionStorage.myUser}！
						</div>
					</div>
				</div>
		)
	}
}

