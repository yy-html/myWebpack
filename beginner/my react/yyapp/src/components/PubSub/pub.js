import React,{Component} from 'react'
import pubsub from 'pubsub-js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '@/store/actionCreator'

class Pub extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: ''
        }
        pubsub.subscribe('Sub-Pub',(msgName,data) => {
            this.setState({
                data
            })
        })
    }
    
    render(){
        console.log('Pub-render')
        return(
            <div>
                <button onClick={this.click.bind(this)}>Pub：</button>
                {this.state.data}
            </div>
        )
    }

    static getDerivedStateFromProps(){
        console.log('Pub-getDerivedStateFromProps')
        return null
    }

    click(){
        pubsub.publish('Pub-Sub','msg')
    }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreator,dispatch)
const NewPub = connect(mapStateToProps,mapDispatchToProps)(Pub)
export default NewPub