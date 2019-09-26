import React,{Component} from 'react'
import {CSSTransition} from 'react-transition-group';
import {Prompt} from 'react-router-dom'

class On_off extends Component{
	constructor(props){
		super(props)
		this.state = {
			display: true,
			list: [],
			succes: false
		}
		this.num = 0
	}

	componentDidMount(){
		this.getData()
	}
	getData(){
		if(this.state.succes) return
		setTimeout( () => {
			if(this.num > 5){	//相当于then状态
				// clearInterval(this.timer)
				this.setState({
					succes: true,
					list: [1,2,3]
				})
			}else{	//相当于catch状态
				this.getData()
				console.log(this.num)
				this.num += 1
			}
		},800)
	}

	componentWillUnmount(){
		this.setState = () => { return }
	}

	// componentDidMount(){	//轮询
	// 	this.timer = setInterval( () => {
	// 		setTimeout( () => {
	// 			if(this.num > 10){	//相当于then状态
	// 				if(this.state.succes) return
	// 				clearInterval(this.timer)
	// 				this.setState({
	// 					succes: true,
	// 					list: [1,2,3]
	// 				})
	// 			}else{	//相当于catch状态
	// 				console.log(this.num)
	// 				this.num += 1
	// 			}
	// 		},1500)
	// 	},50)
	// }

	render(){
		// let showH = ''
		// this.state.display ? showH = <div>show/hide</div> : null
		console.log('render()',this)
		return (
			<div>
        		<Prompt when={true} message='Do you want to leave?'></Prompt>

				<button onClick={this.click.bind(this)}>on/off</button>
				{/*动画运行至Exit是否销毁DOM元素*/}
				<CSSTransition	classNames= 'fade'
								timeout={500}
								in={this.state.display}
								appear={true}
								unmountOnExit
								onEntered={ dom => {
									dom.style.color = '#f00'
								}}>
								{/* // onEnter={ ()=> {
								// 	this.box.style.display = 'block'
								// }}
								// onEntering={ () => {}}
								// onEntered={ () => {}}

								// onExit={ () => {}}
								// onExited={ () => {
								// 	this.box.style.display = 'none'
								// }}
								// onExiting={ () => {}} */}
					<div ref={ (box) => this.box = box}>
					{/*style={{display: this.state.display ? 'block' : 'none'}}*/}
					show/hide
					</div>
				</CSSTransition>
				{/* <div className={this.state.display ? 'none' : 'block'}>show/hide</div> */}
				<ul>
					{this.state.list.map( (item,index) => (
						<li key={index}> {item} </li>
					))}
				</ul>

				{/* {
					this.state.display ||
					<div>show/hide</div>
				} */}
				{/* {
					this.state.display ? (
						<div>show/hide</div>
					) : (
						null
					)
				} */}
				{/* {
					this.showH()
				} */}
				{/* {
					showH
				} */}
            </div>
		)
	}

	click(){
        this.setState({
            display: !this.state.display	//this.state.display ? false : true
		})
	}
	// showH(){
	// 	if(this.state.display){
	// 		return(
	// 			<div>show/hide</div>
	// 		)
	// 	}
	// }
}

export default On_off