import React,{Component} from 'react'
import Pub from './pub'
import Sub from './sub'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '@/store/actionCreator'

class PubSub extends Component{
    state = {
        msg: 'msg',
        test: 0
    }
    render(){
        console.log('PubSub-render',this)
        return(
            <div>
                <p onClick={ () => {this.setState({msg: 'msg1'})} }>PubSub：{this.state.msg}</p>
                <Pub msg={this.state.msg}/>
                <Sub />
            </div>
        )
    }
    static getDerivedStateFromProps(){
        console.log('PubSub-getDerivedStateFromProps')
        return null
    }
}
const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreator,dispatch)
const NewPubSub = connect(mapStateToProps,mapDispatchToProps)(PubSub)


export default NewPubSub