import React,{Component} from 'react'
import PropTypes from 'prop-types'

class test1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'test1'
        }
    }
    static contextTypes = {
        toChild: PropTypes.string
    }
    render(){
        return (
            <div onClick={this.props.click}>
                test1：this.context = {this.context.toChild}
            </div>
        )
    }
}

export default test1