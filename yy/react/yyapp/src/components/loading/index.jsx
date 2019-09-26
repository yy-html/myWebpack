import React,{Component} from 'react'

export default class Loading extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'Loading',
		}
	}
	
	render(){
		console.log(this.state.msg,this)
		return (
			<div className='loading' style={ {display: this.props.display} }>⭕️加载中</div>
		)
	}
}