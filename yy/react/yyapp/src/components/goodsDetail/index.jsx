import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import detailApi from '@/api/detail.js'
import cartApi from '@/api/cart.js'
import store from '@/redux/store/index.js'

export default class GoodsDetail extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'GoodsDetail',
//			detailList: [
//				{
//					goodsName: '',
//					goodsListImg: '',
//					price: '',
//				}
//			]
			detailList: []
		}
	}
	
	goback(){
		this.props.history.goBack()
	}
	addToCart(){
		if(sessionStorage.myUser){
				var userID = sessionStorage.myUser
				var goodsID = this.props.match.params.goodsID
				var number = 1
				cartApi.getCart(userID, data => {
					if(data != 0){
						data.map( (item,index) => {
							item.goodsID == goodsID
								? number = item.number*1 + 1
								: null
						})
						store.dispatch({
							type: 'CART_LIST',
							data
						})
					}
					console.log(userID,goodsID,number)
					cartApi.updateCart({
						userID,
						goodsID,
						number
					}, data => {
						if(data == 1){
							alert('yes！')
							cartApi.getCart(userID, data => {
								console.log('addToCart',data)
							})
						}else{alert('error!')}
					})
					
				})
		}else{
			this.props.history.push('/login')
		}
	}
	
	componentDidMount(){
		cartApi.getCart('yyailj', data => console.log('getCart',data))
		console.log('goodsDetail',this)
		let id = this.props.match.params.goodsID //动态传参接收
		detailApi.getList( id, data => {
			store.dispatch({
				type: 'DETAIL_LIST',
				data
			})
		})
	}
	
	
	render(){
		console.log(this.state.msg,this)
		return (
			<div className='container'>
				<div className='main'>
					<header>
						<ul className='goodsDetailHeader'>
							<li onClick={this.goback.bind(this)}>返回</li>
							<li>GoodsDetailHeader</li>
							<li>分享</li>
						</ul>
					</header>
					<div className='content'>
						{/*<img src={this.state.detailList[0].goodsListImg} />
					{this.state.detailList[0].goodsName}：¥{this.state.detailList[0].price}*/}
						{
							store.getState().detail.detailList.map( (item,index) => {
								return (
									<div key={index}>
										<img src={item.goodsListImg} />
										{item.goodsName}：¥{item.price}
									</div>
								)
							})
						}
					</div>
					<footer>
						<button onClick={this.addToCart.bind(this)}>Add to cart</button>
						<br />
						<Link to='/index/cart'> <button>Go cart</button> </Link>
					</footer>
				</div>
			</div>
		)
	}
}


