import React, {Component} from 'react'
import cartApi from '@/api/cart.js'
import store from '@/redux/store/index.js'

export default class Cart extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'Cart'
		}
	}
	
	up(goodsID,price,index){
		var userID = sessionStorage.myUser
		var number = this.refs['number' + goodsID].value*1 + 1
		cartApi.updateCart({
			userID,
			goodsID,
			number
		}, data => {
			if(data == 1){
				this.refs['number' + goodsID].value = number
				store.dispatch({
					type: 'UPDATE_NUMBER',
					data: {
						index,
						number
					}
				})
			}else{
				alert('error!')
			}
		})
	}
	down(goodsID,price,index){
		var userID = sessionStorage.myUser
		var number = this.refs['number' + goodsID].value*1 - 1
		if(number <= 0){
			return
		}
		cartApi.updateCart({
			userID,
			goodsID,
			number
		}, data => {
			if(data == 1){
				this.refs['number' + goodsID].value = number
				store.dispatch({
					type: 'UPDATE_NUMBER',
					data: {
						index,
						number
					}
				})
			}else{
				alert('error!')
			}
		})
	}
	numberChange(goodsID,price,index){
		var userID = sessionStorage.myUser
		var number = parseInt(this.refs['number' + goodsID].value)
		if(!isNaN(number) && number > 0){
			null
		}else{
			number = 1
		}
		cartApi.updateCart({
			userID,
			goodsID,
			number
		}, data => {
			if(data == 1){
				this.refs['number' + goodsID].value = number
				store.dispatch({
					type: 'UPDATE_NUMBER',
					data: {
						index,
						number
					}
				})
			}else{
				alert('error!')
			}
		})
	}
	del(goodsID,index){
		var userID = sessionStorage.myUser
		cartApi.updateCart({
			userID,
			goodsID,
			number: 0
		}, data => {
			if(data == 1){
				store.dispatch({
					type: 'DELETE_CART',
					data: {
						index
					}
				})
			}
		})
	}
	
	//检验登陆
	componentWillMount(){
		!sessionStorage.myUser 
			? this.props.history.push('/login')
			: null
	}
	
	componentDidMount(){
		cartApi.getCart('yyailj', data => {
			console.log('getCart',data)
			if(data == 0){
				return
			}
			store.dispatch({
				type: 'CART_LIST',
				data
			})
		})
	}
	
	render(){
		console.log(this.state.msg,this)
		console.log('cart-store.getState()',store.getState())
		
		var cartListArr = []
		if(store.getState().cart.cartList == 0){
			cartListArr.push(
				<div key='e'>No goods have been added！</div>
			)
		}else{
			cartListArr.push(
				<p key='p'>TotalPrice：¥{store.getState().cart.totalPrice}</p>
			)
			store.getState().cart.cartList.map( (item,index) => {
				cartListArr.push(
					<div className='cartList' key={index}>
						<img src={item.goodsListImg} />
						<div>
							<p>{item.goodsName}</p>
							<p>single：¥{item.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total：<span ref={'total' + item.goodsID}>¥{item.price * item.number}</span></p>
							<p>
								<button onClick={this.down.bind(this,item.goodsID,item.price,index)}>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</button>
								<input onBlur={this.numberChange.bind(this,item.goodsID,item.price,index	)} type='text' ref={'number' + item.goodsID} defaultValue={item.number} />
								<button onClick={this.up.bind(this,item.goodsID,item.price,index)}>&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;</button>
							</p>
							<p onClick={this.del.bind(this,item.goodsID,index)}>删除</p>
						</div>
					</div>
				)
			})
		}
		
		return (
			<div className='main'>
				<header>
					Cart header
				</header>
				<div className='content'>
					
					{
						cartListArr
					}
				</div>
			</div>
		)
	}
}

