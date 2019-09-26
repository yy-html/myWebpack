import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '@/store/actionCreator'
import PropTypes from 'prop-types'

import store from '@/store/'
// import PropTypes from 'prop-types'
// import f from 'fetch-jsonp'

// e.preventDefault() 阻止默认行为
//组件的 render 方法返回 null 并不会影响该组件生命周期方法的回调。例如，componentWillUpdate 和 componentDidUpdate 依然可以被调用
// document.body.style.margin = "0px";
// // 这是防止页面被拖拽
// document.body.addEventListener('touchmove', (ev) => {
//     ev.preventDefault();
// });

// React.PureComponent

// ES6 模块之中，顶层的this指向undefined

// Object.assign

import Test1 from '@/components/Test/test1'
import Input from '@/components/Test/input'
import TodoList from '@/components/Test/todoList'
import ImgTxt from '@/components/Test/imgTxt'
import Total from '@/components/Test/total'
import TextAndCheckbox from '@/components/Test/textAndCheckbox'
import Drag from '@/components/Drag/'
import data from '@/components/Test/data'

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      msg: '123',del: 'delete',test: 0,display: false,fatherMsg: 'fatherMsg',classList: [],
      value: '',todoList: [{val: 1,id: 'qwer'},{val: 2,id: 'asdf'},{val: 3,id: 'zxcv'},],todoListInCode: true,num: 0,sync: 0,iptValue: '',dataImg: '',dataTxt: '',data: data,totalNumList: [2,5,8],totalNum: '',yy: store.getState().testReducer.test,toChild: 'msg',
      testyy: 11
    }
    let newData = {...this.state.data};let dataImg = [];let dataTxt = []
    for(let i in newData){
      i === 'img' ? dataImg = data[i] : null
      i === 'txt' ? dataTxt = data[i] : null
    }
    this.state.dataImg = dataImg;this.state.dataTxt = dataTxt
    this.state.totalNum = this.state.totalNumList.reduce( (pre,next,index,array) => pre+next)
    this.deleteLi = this.deleteLi.bind(this)
    console.log('f-constructor')
    // store.subscribe(() => {
    //   console.log(1111111,'subscribe')
    //   this.setState({
    //     yy: store.getState().testReducer.test
    //   })
    // })
  }
  
  render() {
    console.log('f-render',this)
    const {state} = this
    return (
      <div className="App" style={{border: '1px #000 solid'}} ref={ (div) => this.box = div }>
        <p>Index：</p>
        <button onClick={ () => {this.setState({
          testyy: 11
        })}}>testyy</button>
        <button onClick={this.changeStore.bind(this)}>changeStore</button> 
        <button onClick={this.changeProps.bind(this)}>changeProps</button> 
        <button onClick={this.sync.bind(this)}>Sync</button>
        <button onClick={this.setstate.bind(this)}>setstate</button>
        <button onClick={this.changeContext.bind(this)}>changeContext</button>
        <button onClick={ () => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>unmount</button>
        <p>sync：{this.state.sync}</p>
        <p>store: {this.props.testReducer.test}\{this.state.yy}</p>
        <p>props：{this.props.location.pathname}</p>
        <Test1  click={this.alert.bind(this)}/>
        <Input  ref='text'
                type='text' 
                placeholder='text'
                change={this.change.bind(this)}
                value={this.state.val}
                del={this.state.del}
                click={this.click.bind(this)}
                display={this.state.display} />
        <TodoList   type='text'
                    placeholder='TodoList'
                    value={this.state.value}
                    change={this.listChange.bind(this)}
                    todoList={this.state.todoList}
                    click={this.listClick.bind(this)}
                    deleteLi={this.deleteLi}
                    todoListInCode={this.state.todoListInCode} />
        {
          state.dataImg.map( (item,index) => (
            <ImgTxt   key={index} 
                      imgBig={item.big}
                      imgSmall={item.small}
                      imgMedium={item.medium}
                      txt={state.dataTxt[index]} />
          ))
        }
        {
          state.totalNumList.map( (item,index) => (
            <Total  key={index}
                    num={item}
                    totalDo={this.totalDo.bind(this)} />
          ))
        }
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total：{state.totalNum}
        <TextAndCheckbox />
        <Drag><p>{/*drag!!!!*/}</p><p>{/*drag!!!!*/}</p></Drag>
      </div>
    )
  }
  
  static getDerivedStateFromProps(nextProps,prevState){
    //此时实例属性已经被加载完毕，可以对状态进行更改，而且不会触发重渲染：componentWillMount
    //componentWillReceiveProps只能改变state或通过请求数据改变 不能改变props和redux,此钩子setState不会触发重渲染,因为下一个钩子就是shouldComponentUpdate：componentWillReceiveProps
    console.log('f-getDerivedStateFromProps')
    return null
  }
  componentDidMount(){
    console.log('f-componentDidMount')
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('f-shouldComponentUpdate')
    // return (
    //   nextState.val != this.state.val
    // )
    return true
  }
  // componentWillUpdate(){
  //   console.log('f-componentWillUpdate')
  // }
  componentDidUpdate(){
    console.log('f-componentDidUpdate')
  }
  componentWillUnmount(){
    //清除计时器，非通过React绑定的事件(addEventListener(),onclick等)
    console.log('f-componentWillUnmount')
  }
  componentDidCatch(){
    console.log('f-componentDidCatch')
  }
  

  changeContext(){
    this.setState({
      toChild: 'changeContext'
    })
  }
  totalDo(type){
		this.setState({
      totalNum: type ? this.state.totalNum + 1 : this.state.totalNum - 1
    })
  }
  sync(){
    // this.state.sync ++ //原state已经发生改变 只是没有重渲染视图,异步改同步的方法：1
    // this.state.sync ++  //2
    // this.state.sync ++  //3
    // console.log(this.state.sync)  //3
    // this.setState({})

    this.setState( (state,props) => ({sync: ++state.sync})) //1 //原state没有发生改变 但是放入队列中的值已经发生改变,异步改同步的方法：2
    this.setState( (state,props) => ({sync: ++state.sync})) //2
    this.setState( (state,props) => ({sync: ++state.sync})) //3
    console.log(this.state.sync)  //0
  }
  setstate(){
    // this.setState({},()=>{
    //   console.log(this.state.sync)
    // })
    this.forceUpdate( () => console.log('forceUpdate()')) //跳过本组件shouldComponentUpdate强制render,异步操作
  }
  changeProps(){
    const num = this.state.num + 1
    this.setState({
        num
    })
    this.props.history.push({
        pathname: '/test/' + num,
        state:{
            num
        }
    })
  }
  alert(){
    this.setState({
      msg: '123456',
      val: ''
    })
  }
  click(ref){
    this.refs[ref].refs.input.value = ''
    if(ref === 'text'){
      this.setState({
        val: '',
        display: false
      })
    }
  }
  change(event){
    var val = event.target.value
    console.log(val)
    if(val.length > 5){
      this.setState({
        val: '✅',
      })
      return
    }else if(val.length > 0){
      this.setState({
        val: '❎',
        display: true
      })
    }else{
      this.setState({
        val: '',
        display: false
      })
    }
  }
  changeStore(){
    this.props.test3Action(1)

    this.props.test2(2)
  }
  listChange(e){
    //要实现数据双向绑定才定义的value值，只需要实现todoList的话不用设置value,直接用ref获取到input.value, setState到list,或者event.target.value获取
    this.setState({
      value: e.target.value
    })
  }
  listClick(e){ //  !!因为arr是引用数据类型,重新赋值了再更改还是会影响原数据
    // this.state.todoList.push(this.state.value)
    // this.setState({
    //   // todoList: this.state.todoList, //省略掉 因为上边已经修改了this.state.todoList,只需要setState一个空对象更新一下就可以
    //   value: '',
    // })
    //or
    if(e.target.nodeName.toLowerCase() != 'button' && e.keyCode != 13){
			return
		}
    // let todoList = this.state.todoList.concat(this.state.value)//不会影响原数组
    let todoList = [...this.state.todoList, {id: random(),val:this.state.value}]
    this.setState({
      todoList,
      value: ''
    })
  }
  deleteLi(id){
    this.setState({
      todoListInCode: false
    })
    // let todoList = [...this.state.todoList] //值传递 不会影响原引用类型数据
    // todoList.splice(index,1)
    this.setState( state => ({
      todoList: state.todoList.filter( (item) => item.id != id) //todoList删除操作的实现
    }))
  }
}

const mapStateToProps = (state,OwnProps) => ({
  ...state,
  vip: state.testReducer.list2 ? true : false,
  total: state.testReducer.list.reduce( (total,next) => {
    return total + next.count
  },0)
  // testReducer: {...state.testReducer,test: 'changeOwnProps'} 意味着在本组件内再也修改不了 慎用
})
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreator,dispatch)
const NewTest = connect(mapStateToProps,mapDispatchToProps)(Test)
export default NewTest
//通过高阶组件connect将store的state和actionCreator dispatch方法传递到组件内，并添加监听方法subscribe至此组件
//connect内做的优化：传递到子组件的props, 只有父组件修改了此 ! props, 而且此 ! props 和之前的值不同, (即使子组件内没有使用,因为没办法判断子组件有没有使用), 子组件才会render

// const mapDispatchToProps = (dispatch) => ({
//   test3Action(data){dispatch(actionCreator.test3Action(data))},
// })





var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','e','x','y','z',1,2,3,4,5,6,7,8,9,0]
function random(){
    var str = ''
    for(var i = 0;i < 4;i ++){
        str += arr[Math.floor(Math.random()*arr.length)]
    }
    return str
}

