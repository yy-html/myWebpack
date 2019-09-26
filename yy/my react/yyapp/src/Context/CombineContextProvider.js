import React,{Component} from 'react'
import {AppContextCom} from './App'
import {App2ContextCom} from './App2'

class CombineContextProvider extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <AppContextCom>
                <App2ContextCom>
                    {this.props.children}
                </App2ContextCom>
            </AppContextCom>
        )
    }
}

export default CombineContextProvider

