import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import userApi from '@/api/user.js'

export default class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'Login'
		}
	}
	
	goBack(){
		this.props.history.push('/home')
	}
	login(){
		if(this.refs.name.length != 0 && this.refs.pwd.length != 0){
			var status = 'login'
			var userID = this.refs.name.value
			var pwd = this.refs.pwd.value
			userApi.LorR({
				status,
				userID,
				pwd
			}, data => {
				if(data == 0){
					alert('The username does not exist！')
				}else if(data == 2){
					alert('Password mistake！')
				}else if(data instanceof Object){
					sessionStorage.myUser = data.userID
					this.props.history.push('/home')
				}
			})
		}
	}
	
	render(){
		console.log(this.state.msg,this)
		return (
			<div className='container'>
				<div className='main'>
					<header>
						Login header
						<p onClick={this.goBack.bind(this)}>goBack</p>
					</header>
					<div className='content'>
						<div>
							<p>UserName：<input type='text' ref='name' /><span></span></p>
							<p>Password：<input type='password' ref='pwd' /></p>
							<p>
								<button onClick={this.login.bind(this)}> Login </button>
								<Link to='/register'> <button>goRegister</button> </Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}