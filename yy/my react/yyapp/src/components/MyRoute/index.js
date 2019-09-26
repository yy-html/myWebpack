import React,{Component} from 'react'
import {Route,Redirect} from 'react-router-dom'

export default class MyRoute extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {path,component:Com} = this.props
        const isAuthenticated = 1
        return(
            <Route path={path} render={ (props) => {
                return isAuthenticated ? (
                    <Com {...props} />
                ) : (
                    <Redirect to='/' />
                )
            }} />
        )
    }
}
