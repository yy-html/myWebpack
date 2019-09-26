import React, {Component,Fragment} from 'react'
import {Route,Switch,Redirect,NavLink} from 'react-router-dom'
import First from './First'
import Second from './Second'

export default class NestRouter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {match} = this.props
        return(
            <div>
                <CustomLink to={`${match.url}/first`} inner='To First' />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <CustomLink to={`${match.url}/second`} inner='To Second' />

                <Switch>
                    <Route path={`${match.path}/first`} component={First} />
                    <Route path={`${match.path}/second`} component={Second} />
                    <Redirect exact from={`${match.url}`} to={`${match.url}/first`} />
                </Switch>
            </div>
        )
    }
}

const CustomLink = ({to,inner}) => (
    <Route  path={to}
            children={ ({match}) => {
                console.log('match',match)
                return(
                <Fragment>
                    {!match ? null : (
                        <span> {'<<'} </span>
                    )}
                    <NavLink to={to}>
                        <span>{inner}</span>
                    </NavLink>
                </Fragment>
                )
            }}/>
)