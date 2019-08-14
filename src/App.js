import React, { Component, PureComponent } from 'react'
import { hot } from 'react-hot-loader/root'
import PropTypes from 'prop-types'

const log = console.log

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldContext: {},
    }
    log(this)
  }
  getChildContext() {  //本组件render()后调用
    return {
      oldContext: this.state.oldContext
    }
  }

  static childContextTypes = {
    oldContext: PropTypes.object,
  }

  componentDidMount() {
    log('App-didMount', this)
  }

  changeState = () => {
    this.setState({})
  }

  static a = 'a'

  render() {
    log('App-render', this)
    
    return (
      <div className='app'>
        App
        <select>
          <option></option>
        </select>
        {this.props.children}
      </div>
    )
  }
}

export default hot(App)