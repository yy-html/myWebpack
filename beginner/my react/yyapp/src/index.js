import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
//Css
import './main.css'

//Components
import Root from './Root'
import ErrorBoundary from '@/components/ErrorBoundary/'
//Redux
import store from '@/store/'
import {Provider} from 'react-redux'

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<ErrorBoundary>
				<Root />
			</ErrorBoundary>
		</Provider>
	</Router>,
	document.getElementById('root')
)

registerServiceWorker()