import React, {Component} from 'react'
import homeApi from '@/api/home.js'
import {Link} from 'react-router-dom'
import store from '@/redux/store/index.js'
import Loading from '@/components/loading/index.jsx'

export default class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'Home',
			list: [],
			isLoading: 'none',
			userName: sessionStorage.myUser || '未登陆',
			test: true
		}
		console.log(this.state.msg,	this)
	}
	
	componentDidMount(){
//	请求完成前操作
		this.setState({
			isLoading: 'flex'
		})
		homeApi.getList( data => {
		//请求完成后操作
			this.setState({
				isLoading: 'none'
			})
			if(data == 'e'){
				this.setState({test:false})
				return
			}
			store.dispatch({
				type: 'HOME_LIST',
				data
			})
		})
	}
	
	LorR(){
		sessionStorage.myUser
			? this.props.history.push('/user')
			: this.props.history.push('/login')
	}
	logout(){
		sessionStorage.removeItem('myUser')
		this.setState({
			userName: '未登陆'
		})
	}
	
	render(){		
		console.log('home-store',store.getState())
		console.log('Home',this)
		return (
			<div className='main'>
			
				<Loading display={this.state.isLoading}/>
				<header>
					Home header
					<p onClick={this.LorR.bind(this)}>{this.state.userName != '未登陆' ? sessionStorage.myUser + '，已登陆' : '未登陆'}</p>
					<p onClick={this.logout.bind(this)} style={ {display: this.state.userName == '未登陆' ? 'none' : 'block'} }>注销</p>
				</header>
				<div className='content'>
					<ul className='homeContent'>
						{
							this.state.test &&
							store.getState().home.homeList.map( (item,index) => {
								return (
									<Link key={index} to={'/goodsDetail/' + item.goodsID + '/' + 'test'}>
										<li>
											<img src={item.goodsListImg} />
											<div>{item.goodsName}：¥{item.price}</div>
										</li>
									</Link>
								)
							})
						}
						{
							this.state.test ||
							<h1>Please check the network connection！</h1>
						}
					</ul>
				</div>
			</div>
		)
	}
}

