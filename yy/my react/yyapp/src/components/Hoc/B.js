import React,{Component} from 'react'
import Hoc from './hoc'

class B extends Component{
	render(){
		return (
			<div>B</div>
		)
	}
}
//let B = ( {testMsg} ) => (
//  <div>B {testMsg}</div>
//)

// B = Hoc({})(B)

export default B