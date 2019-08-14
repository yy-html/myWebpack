import React, { Component } from 'react'

const o = {}

export const asyncComponent = (fileName, options = {}) => {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const { default: component } = await import(`@src/components${fileName}`)

      this.setState({
        component,
      })
    }

    render() {
      const { component: C } = this.state

      return (
        C ? <C {...this.props} /> : null
      )
    }
  }

  if (o[fileName]) {
    return o[fileName]
  }

  o[fileName] = AsyncComponent
  return o[fileName]
}