import React,{Component} from 'react'
import PropTypes from 'prop-types'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      msg: 'App',
      value: 'Select one :',
      style: {
        f: {
          width: '100px',
          height: '100px',
          position: 'absolute',
          left: 0,
          right: 0,
          top: '-10%',
          bottom: 0,
          margin: 'auto'
        }
      },
      count: 0,
      YyCom: null
    }
    this.go = this.go.bind(this)
  }
  //获取Provider的context-store
  static contextTypes = {
    store: PropTypes.object
  }


  go(e){
    let pathname = e.target.value
    this.props.history.push({
      pathname,
      state: {
        pathname
      },
      params: {id:1},
      search: 't=t'
    })
  }

  componentWillUnmount(){
    console.log('App-componentWillUnmount')
    clearTimeout(this.timer)
  }

  componentDidMount(){
    // setTimeout( () => {
    //   console.log('start')
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log(this.state.count) // 先输出start 再进入更新周期 最后输出1 因为此时setState是同步
    // })

    console.log(window.history)
    //同态(按需)加载组件
    this.timer = setTimeout( ()=> {
      // require.ensure([], (require) => {
      //   console.log(2)
      //   const Yy = require('./Yy');
      //   this.setState({
      //       YyCom: <Yy />
      //   })
      // })
      import('./Yy.js').then( Com => {
        this.setState({
          YyCom: <Com />
        })
      })
    },3000)
  }

  render(){
    console.log(this)
    return(
      <div style={this.state.style.f}>
        <select onChange={this.go} value={this.state.value}>
          <option disabled>Select one :</option>  {/*option不能使用selected=true设置默认选中*/}
          <option value='/swiperl'>SwiperL</option>
          <option value='/test/0'>Test</option>
          <option value='/on_off'>On_off</option>
          <option value='/hoc'>Hoc</option>
          <option value='/antdm'>AntDM</option>
          <option value='/antd'>AntD</option>
          <option value='/animate'>Animate</option>
          <option value='/classify'>Classify</option>
          <option value='/nestrouter'>NestRouter</option>
          <option value='/pubsub'>PubSub</option>
          <option value='/context'>Context</option>
          <option value='/liftingstateup'>LiftingStateUp</option>
          <option value='/pureswiper'>PureSwiper</option>
          <option value='/slide'>Slide</option>
        </select>
        {this.state.YyCom}
      </div>
    )
  }
}

export default App

