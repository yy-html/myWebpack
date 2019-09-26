import React, {Component} from 'react'

export default class Goods extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'goods'
		}
	}
	
	render(){
		console.log(this.state.msg,this)
		return (
			<div className='container'>
				<div className='main'>
					<header>
						Goods header
					</header>
					<div className='content'>
						Goods
					</div>
				</div>
			</div>
		)
	}
}