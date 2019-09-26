import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import fetchJsonp from 'fetch-jsonp'

//refs ： 拿DOM元素;拿到儿子组件（父亲调用儿子的地方给儿子标签添加ref属性名 在父亲组件内部this.refs可以访问组件）（vue中的refs是拿子组件 或者this.$children）
//props ：父子组件传值(父亲调用儿子的地方给儿子标签添加自定义属性名 在儿子组件内部this.props可以访问值或方法)

class Son extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'Son'
		}
		console.log(this.state.msg,this)
	}
	
	sendtof(){
		this.props.stof(this.state.msg)
	}
	
	render(){
		
		return (
			<div>
				<button onClick={this.sendtof.bind(this)}> {this.state.msg} get-f-msg:{this.props.ftos} </button>
			</div>
		)
	}
}

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			msg: 'App',
			sonmsg: '',
			list: [1,2,3,4,5],
			list2: [],
			flag: false,
			flag2: false
		}
		console.log(this.state.msg,this)
	}
	
	getNum(){
		this.setState({
			flag: !this.state.flag
		})
	}
	getData(){
		var val = this.refs.text.value
		fetchJsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + val,{
			jsonpCallback: 'cb',
//			timeout: 5000
		})
			.then( res => res.json() )
			.then( data => {
				this.setState({
					list2: data.s
				})
			})
			.catch( err => console.log(err) )
	}
	changeData(val){
		this.setState({
			sonmsg: val
		})
	}
	
	render(){
		console.log('test',this)
		let num = []
		if(this.state.flag){
			this.state.list.map( (item,index) => {
				num.push( <li key={item}> {item} </li> )
			})
		}else{
			num = ''
		}
		
		return (
			<div>
				<Son ftos={this.state.msg} stof={this.changeData.bind(this)} ref='son' />
				<button>{this.state.msg} get-s-msg:{this.state.sonmsg}</button>
				<br/>	
				<input ref='text' type='text' onChange={this.getData.bind(this)} />
				<button onClick={this.getNum.bind(this)}>click</button>
				<ul>
					{
//						this.state.list.map( (item,index) => {
//							return <li key={item}> {item} </li>
//						})
						num
					}
					{
						this.state.list2.map( (item,index) => {
							return <li key={index}> {item} </li>
						})
					}
				</ul>
			</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('root'))