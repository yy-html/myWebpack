import React,{Component} from 'react'
import Hoc from './hoc'

class A extends Component{
    render(){
        console.log('A',this)
        return (
            <div>A</div>
        )
    }
}

A = Hoc({})(A)

export default A