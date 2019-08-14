import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import CustomRoute from '@src/Route'
import App from '@src/App'

import './style.scss'

ReactDOM.render(
  <Router>
    <App>
      <CustomRoute />
    </App>
  </Router>
  ,
  document.getElementById('root'),
)















// 第一次修改js不会生效; 使用react-hot-loader 就不用这个
// if (module.hot) {
//   console.log(1)
//   module.hot.accept(render)
// }
