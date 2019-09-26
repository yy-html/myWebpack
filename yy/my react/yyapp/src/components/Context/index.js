import React,{Component,Fragment} from 'react'
import Son from './Son.js'
import Son2 from './Son2.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '@/store/actionCreator'
const {requireText} = require('./require')

class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            test: 1,
            params: props.match.params.id
        }
        console.log('Parent-constructor')
        this.intervalList = []
        this.setSon2Ref = React.createRef() //.current === DOMElement; 子组件暴露DOM给父组件
        this.setPRef = el => this.p = el    //渲染时执行回调设置ref
    }

    render(){
        console.log('Parent-render',this)
        return(
            <Fragment>
                <p ref={this.setPRef}>Parent: {requireText}</p> {/* el => this.p = el */}
                <button    onClick={ () => {this.setState({test: 2})}}>setState</button>
                <button    onClick={ () => {
                    const params = (this.state.params || 0) + 1
                    // this.setState({
                    //     params
                    // })   //在getDerivedStateFromProps里实现
                    this.props.history.push('/context/' + params)
                }}>changeProps</button>
                <Son    test={this.state.test}/>
                <Son2   divRef={this.setSon2Ref}/>
            </Fragment>
        )
    }

    setInterval(){
        this.intervalList.push(window.setInterval(...arguments))
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log('Parent-getDerivedStateFromProps',nextProps,prevState)
        //此时实例属性已经被加载完毕，可以对状态进行更改，而且不会触发重渲染：componentWillMount
        //componentWillReceiveProps只能改变state或通过请求数据改变 不能改变props和redux,此钩子setState不会触发重渲染,因为下一个钩子就是shouldComponentUpdate：componentWillReceiveProps
        if(typeof nextProps.match.params.id != prevState.params){
            return {
                params: Number(nextProps.match.params.id),
            }
        }
        return null
        // 此钩子相比之前解决了哪些问题？
    }
    componentDidMount(){
        console.log('Parent-componentDidMount')
        // this.setInterval( () => console.log(1),1000)
        // this.setInterval( () => console.log(2),1000)
        this.setSon2Ref.current.style.color = '#f00'
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('Parent-shouldComponentUpdate',nextProps,nextState)
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Parent-getSnapshotBeforeUpdate',prevProps,prevState)
        return null
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('Parent-componentDidUpdate',prevProps,prevState,snapshot)
    }
    componentWillUnmount(){
        console.log('Parent-componentWillUnmount')
        //清除计时器，非通过React绑定的事件(addEventListener(),onclick等)，重写setState()等
        this.setState = (state,cb) => {   //解决异步请求中组件销毁数据回来后setState报错的问题
            return
        }
        // this.testList.forEach( (a,b,c) => console.log(a,b,c) )
        // this.testList.forEach(console.log)//相当于运行console.log这个函数length次,参数...arguments
        // this.intervalList.forEach( item => clearInterval(item))
        this.intervalList.forEach(clearInterval)
    }
    componentDidCatch(){
        console.log('Parent-componentDidCatch')
    }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => bindActionCreators(actionCreator,dispatch)
const NewParent = connect(mapStateToProps,mapDispatchToProps)(Parent)

export default NewParent