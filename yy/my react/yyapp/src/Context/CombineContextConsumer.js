import React,{Component} from 'react'
import {AppContext} from './App'
import {App2Context} from './App2'

class Consumer extends Component{
    render(){
        return(
            <AppContext.Consumer>
                { appContext => (
                    <App2Context.Consumer>
                        { app2Context => (
                            this.props.children(appContext,app2Context)
                        )}
                    </App2Context.Consumer>
                )}
                
            </AppContext.Consumer>
        )
    }
}

export default Consumer

