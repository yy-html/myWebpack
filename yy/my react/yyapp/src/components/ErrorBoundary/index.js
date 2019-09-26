import React, {Component} from 'react'

export default class ErrorBoundary extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'ErrorBoundary',
			hasError: false
		}
	}
	render(){
		console.log(this)
		if(this.state.hasError){
			return <h1>Error!</h1>
		}else{
			return this.props.children
		}
	}
	
	componentDidCatch(){
		console.log('ErrorBoundary-componentDidCatch')
		this.setState({
			hasError: true
		})
	}
}
