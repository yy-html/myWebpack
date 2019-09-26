import React,{Component} from 'react'

class test2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'test2'
        }
    }

    render(){
        return (
            <div>test2 {this.props.msg}</div>
        )
    }
}

export default test2