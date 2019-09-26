import React, {Component} from 'react'
import classifyApi from '@/api/classify.js'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import store from '@/redux/store/index.js'
import Loading from '@/components/loading/index.jsx'

export default class Classify extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'Classify',
			activeIndex: sessionStorage.classID - 1 || 0,
			num: 0,
			isLoading: 'none'
		}
		this.active = this.active.bind(this)
	}
	
	active(index,classID){
//		var nodes = this.refs.menu.children
//		for(var i = 0;i < nodes.length;i ++){
//			nodes[i].removeAttribute('class')
//		}
//		nodes[index].setAttribute('class','active')
		this.setState({
			isLoading: 'flex'
		})
		
		sessionStorage.classID = classID
		
		this.setState({
			activeIndex: index
		})
		classifyApi.getClassList( classID, data => {
			store.dispatch({
				type: 'CLASS_LIST',
				data
			})
			this.setState({
				isLoading: 'none'
			})
		})
	}

	backTop(){
//		var  clickedTime={
//    timeA: '',
//    timeB: ''
// 		}
		var _this = this
		setTimeout(function(){
			_this.setState({
				num: 0
			})
		},500)
		this.setState({
			num: ++ this.state.num
		})
		if(this.state.num > 1){
			$(_this.refs.list).animate({
				scrollTop: 0
			})
		}
		
		//实现返回同高度
	}
	
	componentDidMount(){
		classifyApi.getList( data => {
			store.dispatch({
				type: 'MENU_LIST',
				data
			})
		})
		let index = this.state.activeIndex
		let classID = sessionStorage.classID || 1
		this.active(index,classID)
	}
	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps',nextProps)
	}
	
	render(){
		console.log(this.state.msg,this)
		var arr = []
		if(store.getState().classify.classList != 0){
			store.getState().classify.classList.map( (item,index) => {
				arr.push(
					<Link key={index} to={'/goodsDetail/' + item.goodsID + '/' + 'test'}>
						<li>	
							<img src={item.goodsListImg} />
							<div>{item.goodsName}：¥{item.price}</div>
						</li>
					</Link>
				)
			})
		}else{
			arr.push (
				<h1 key='h1'>暂无数据</h1>
			)
		}
		
		return (
				<div className='main'>
					
					<Loading display={this.state.isLoading} />
					
					<header ref='header' onClick={this.backTop.bind(this)}>
						Classify header
					</header>
					<div className='content'>
						<div className='classify'>
							<ul className='menu' ref='menu'>
							{
								store.getState().classify.menuList.map( (item,index) => {
									return (
											<li key={index} onClick={this.active.bind(this,index,item.classID)} className={this.state.activeIndex == index ? 'active' : ''}>
												{item.className}
											</li>
									)
								})
							}
							</ul>
							<ul className='list' ref='list'>
								{
									arr
								}
							</ul>
						</div>
					</div>
				</div>
		)
	}
}

