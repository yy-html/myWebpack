import React,{Component} from 'react'
import pubsub from 'pubsub-js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '@/store/actionCreator'

class Sub extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: ''
        }
        pubsub.subscribe('Pub-Sub',(msgName,data) => {
            console.log('msgName：',msgName)
            console.log('data：',data)
            this.setState({
                data
            })
            pubsub.publish('Sub-Pub','msg')
        })
    }

    render(){
        console.log('Sub-render')
        return(
            <div>
                Sub：{this.state.data}
            </div>
        )
    }
    
    static getDerivedStateFromProps(){
        console.log('Sub-getDerivedStateFromProps')
        return null
    }
}
const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreator,dispatch)
const NewSub = connect(mapStateToProps,mapDispatchToProps)(Sub)

export default NewSub