import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import actionCreator from '@/store/actionCreator'
import {bindActionCreators} from 'redux'

class GrandSon extends Component{
    constructor(props){
        super(props)
        this.state = {}
        this.changeContext = this.changeContext.bind(this)
    }
    static contextTypes = {
        oldContext: PropTypes.string
    }
    render(){
        console.log('GrandSon-render',this)
        return(
            <div>
                <p>GrandSon</p>
                <button onClick={this.changeContext}>changeContext</button>
                <br />
                newContext-AppContext：{this.props.appContext.msg}
                <br />
                newContext-App2Context：{this.props.app2Context.msg}
                <br />
                oldContext：{this.context.oldContext}
            </div>
        )
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('GrandSon-getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('GrandSon-componentDidMount')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('GrandSon-shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('GrandSon-getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('GrandSon-componentDidUpdate')
    }   
    componentWillUnmount(){
        console.log('GrandSon-componentWillUnmount')
    }
    componentDidCatch(){
        console.log('GrandSon-componentDidCatch')
    }

    changeContext(){
        this.props.appContext.dispatch({
            type: 'CHANGE_MSG',
            data: 'changeAppContextMsg'
        })
        this.props.app2Context.dispatch({
            type: 'CHANGE_MSG',
            data: 'changeApp2ContextMsg'
        })
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators(actionCreator,dispatch)

const newGrandSon = connect(mapStateToProps,mapDispatchToProps)(GrandSon)

export default GrandSon