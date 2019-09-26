import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '@/store/actionCreator'

import GrandSon from './GrandSon'

import ContextConsumer from '@/Context/CombineContextConsumer'
 
class Son extends Component{
    state = {}
    static getDerivedStateFromProps(){
        console.log('Son-getDerivedStateFromProps')
        return null
    }
    render(){
        console.log('Son-render',this)
        return(
            <ContextConsumer>
                { (appContext,app2Context) => (
                    <div>
                        <p>Son</p>
                        <GrandSon appContext={{...appContext}} app2Context={{...app2Context}} />
                    </div>
                )}
            </ContextConsumer>
        )
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('Son-getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Son-componentDidMount')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('Son-shouldComponentUpdate')
    return true
    }
    getSnapshotBeforeUpdate(){
        console.log('Son-getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('Son-componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('Son-componentWillUnmount')
    }
    componentDidCatch(){
        console.log('Son-componentDidCatch')
    }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => bindActionCreators(actionCreator,dispatch)
const NewSon= connect(mapStateToProps,mapDispatchToProps)(Son)

export default NewSon