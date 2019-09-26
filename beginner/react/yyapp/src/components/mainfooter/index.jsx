import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

//const MainFooter = () => (
//	<footer>
//		<ul>
//			<li>
//				<NavLink to='/home'>首页</NavLink>
//			</li>
//			<li>
//				<NavLink to='/goods'>商品</NavLink>
//			</li>
//			<li>
//				<NavLink to='/classify'>分类</NavLink>
//			</li>
//			<li>
//				<NavLink to='/cart'>购物车</NavLink>
//			</li>
//			<li>
//				<NavLink to='/user'>用户</NavLink>
//			</li>
//		</ul>
//	</footer>
//)

class MainFooter extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'mainfooter'
		}
	}
	
	topage(pathname){
//		this.props.history.push({
//			pathname,
//			state: {
//				mag: 
//			}
//		})
	}
	
	render(){
		console.log(this.state.msg,this)
		let paramsId = 'paramsId'
		let props = this.props.router
		return (
			<footer>
				<ul>
					<li>
						<NavLink 
							// to='/index/home'
							to={{	//默认显示的路由在重定向里配合设置所有参数
								pathname: `${props.match.url}/home`,
								// params: paramsId,
								// hash: '',
								state: {
									a:3,
									b:4
								}
							}}
							// exact={true}
							// strict={true}
							activeClassName='active'
							activeStyle={{color: '#f00'}}
							// isActive={() => {}}
							>首页
						</NavLink>
					</li>
					<li>
						<NavLink to={{
							pathname: `${props.match.url}/goods`,
							search: 't=t&h=h',
							state: {
								a:1,
								b:2
							}
						}}>商品</NavLink>
					</li>
					<li>
						<NavLink to={`${props.match.url}/classify`}>分类</NavLink>
					</li>
					<li>
						<NavLink to={`${props.match.url}/cart`}>购物车</NavLink>
					</li>
					<li>
						<NavLink to={`${props.match.url}/user`}>用户</NavLink>
					</li>
				</ul>
			</footer>
		)
	}
}

export default MainFooter