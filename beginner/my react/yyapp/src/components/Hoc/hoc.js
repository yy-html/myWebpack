import React,{Component,Fragment} from 'react'
import {Redirect} from 'react-router-dom'

export default (data) => (OldCom) => (
    class extends OldCom{   //反向继承：渲染劫持
        render(){
            const isAuthenticated = 1
            return(
                <Fragment>
                    {
                        isAuthenticated ? (
                            super.render()  //  <OldCom {...this.props} {...data} /> //属性代理
                        ) : (
                            <Redirect to='/login' />
                        )
                    }
                </Fragment>
            )
        }
    }
)