import React, {Component} from 'react'
import user from '@/api/user.js'
import {Link} from 'react-router-dom'
import userApi from '@/api/user.js'

export default class Register extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'Register',
			checkName: '',
			checkPwd1: '',
			checkPwd2: '',
			clearStyle: 'none',
			registerColor: this.checkName == '✅' && this.checkPwd1 == '✅' && this.checkPwd2 == '✅' ? '#f00' : ''
		}
		this.pwd2Change = this.pwd2Change.bind(this)
		this.nameChange = this.nameChange.bind(this)
	}
	
	goBack(){
		this.props.history.push('/home')
	}
	register(){
		if(this.state.checkName == '✅' && this.state.checkPwd1 == '✅' && this.state.checkPwd2 == '✅'){
			var userID = this.refs.name.value
			var pwd = this.refs.pwd2.value
			var status = 'register'
			userApi.LorR({
				status,
				userID,
				pwd
			}, data => {
				switch(data){
					case 0 : alert('The user name has been registered！');break;
					case 1 : alert('Registered successfully！');
									this.props.history.push('/login');
									break;
					case 2 : alert('Registration failed！');
				}
			})
		}else{
			this.setState({
				registerColor: ''
			})
		}
	}
	clear(){
		this.refs.name.value = ''
		this.nameChange()
	}
	nameChange(){
		var userID = this.refs.name.value
		userID.length > 4
			? this.setState({
				checkName: '✅'
			})
			: userID.length != 0
				? this.setState({
					checkName: '❎'
				})
				: this.setState({
					checkName: ''
				})
	}
	pwd1Change(){
		var pwd1 = this.refs.pwd1.value
		pwd1.length >= 3
			? this.setState({
				checkPwd1: '✅'
			}, () => this.pwd2Change())
			: pwd1.length != 0
				? this.setState({
					checkPwd1: '❎'
				}, () => this.pwd2Change())
				: this.setState({
					checkPwd1: ''
				}, () => this.pwd2Change())
	}
	pwd2Change(){
		var pwd2 = this.refs.pwd2.value
		if(pwd2.length != 0){
			var pwd1 = this.refs.pwd1.value
			pwd1 == pwd2 && this.state.checkPwd1 == '✅'
				? this.setState({	
						checkPwd2: '✅'
					})
				: this.setState({
						checkPwd2: '❎'
					})
		}else{
			this.setState({
				checkPwd2: ''
			})
		}
	}
	
	render(){
		return (
			<div className='container'>
				<div className='main'>
					<header>
						Register header
						<p onClick={this.goBack.bind(this)}>goBack</p>
					</header>
					<div className='content'>
						<div>
							<p>
								UserName：<input type='text' ref='name' onChange={this.nameChange.bind(this)} />
								<span>{this.state.checkName}</span>
								
								
								<span style={ {display: this.state.checkName != '' ? 'inline' : 'none'} } onClick={this.clear.bind(this)}>✖︎️</span>
								
								
							</p>
							<p>
								Password：<input type='password' ref='pwd1' onChange={this.pwd1Change.bind(this)} />
								<span>{this.state.checkPwd1}</span>
							</p>
							<p>
								Password：<input type='password' ref='pwd2' onChange={this.pwd2Change.bind(this)} />
								<span>{this.state.checkPwd2}</span>
							</p>
							<p>
								<button onClick={this.register.bind(this)} style={ {color: this.state.checkName == '✅' && this.state.checkPwd1 == '✅' && this.state.checkPwd2 == '✅' ? '#f00' : ''} }>Register</button>
								<Link to='/login'> <button>goLogin</button> </Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}