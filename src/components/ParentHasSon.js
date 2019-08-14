import React, { Component, PureComponent, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
const log = console.log

const Son21 = (props) => {
  console.log('Son21-render')

  // useEffect(() => {
  //   console.log('Son21-effect')
  // })

  return (
    <div>
      Son21
    </div>
  )
}

const Son2 = (props) => {
  const [state, setState] = useState(0)

  const changState = (e) => {
    e.stopPropagation()
    setState(state)
  }

  // useEffect(() => {  
  //   console.log('Son2-effect')
  //   return () => { 
  //     console.log('Son2-clearEffct')
  //   }
  // })

  console.log('Son2-render')

  return (
    <div onClick={changState}>
      Son2
      <Son21 />
    </div>
  )
}

class Son1 extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      son1State: true
    }
  }

  static contextTypes = {
      oldContext: PropTypes.object,
  }

  componentWillMount() {
    log(1, 'Son1-willMount', this)
  }

  componentWillReceiveProps(nextProps, nextState) {
    log(1, 'Son1-willReceiveProps', this)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   log(1, 'Son1-shouldComponentUpdate', this)
  //   return true 
  // }

  componentDidMount() {
    log(1, 'Son1-didMount', this)
  }

  componentDidUpdate() {
    log(1, 'Son1-didUpdate', this)
  }

  changeState = () => {
    this.setState({
      son1State: !this.state.son1State
    })
  }

  render() {
    log(1, 'Son1-render', this)

    return (
      <div onClick={this.changeState}>
        Son1
      </div>
    )
  }
}

class Son3 extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      son3State: true
    }
  }

  static contextTypes = {
      oldContext: PropTypes.object,
  }

  componentWillMount() {
    log(1, 'Son3-willMount', this)
  }

  componentWillReceiveProps(nextProps, nextState) {
    log(1, 'Son3-willReceiveProps', this)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   log(1, 'Son3-shouldComponentUpdate', this)
  //   return true 
  // }

  componentDidMount() {
    log(1, 'Son3-didMount', this)
  }

  componentDidUpdate() {
    log(1, 'Son3-didUpdate', this)
  }

  changeState = () => {
    this.setState({
      son3State: !this.state.son3State
    })
  }

  render() {
    log(1, 'Son3-render', this)

    return (
      <div onClick={this.changeState}>
        Son3
      </div>
    )
  }
}

export default class ParentHasSon extends PureComponent {
  constructor(props, context) {
    super(props)
    this.state = {
      fatherState: true
    }
  }

  static contextTypes = {
      oldContext: PropTypes.object,
  }

  componentWillMount() {
    log(0, 'ParentHasSon-willMount', this)
  }

  componentWillReceiveProps(nextProps, nextState) {
    log(0, 'ParentHasSon-willReceiveProps', this)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   log(0, 'ParentHasSon-shouldComponentUpdate', this)
  //   return true 
  // }

  componentDidUpdate() {
    log(0, 'ParentHasSon-didUpdate', this)
  }

  componentDidMount() {
    log(0, 'ParentHasSon-didMount', this)
  }

  componentDidUpdate(prevProps, prevState) {
    log(0, 'ParentHasSon-didUpdate', this)
  }

  changeState = () => {
    this.setState({
      fatherState: this.state.fatherState
    })
  }

  render() {
    log(0, 'ParentHasSon-render', this)

    return (
      // <div onClick={this.changeState}>
      <div>
        ParentHasSon
        <Son1 />
        <Son2 />
        <Son3 />
      </div>
    )
  }
}