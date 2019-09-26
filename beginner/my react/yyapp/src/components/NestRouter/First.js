import React, {Component,Fragment} from 'react'
import {Route,NavLink} from 'react-router-dom'

import FirstList from './FirstList'

export default class First extends Component{
    render(){
        console.log(this)
        const {match} = this.props
        return(
            <div>
                <p>First</p>
                <NavLink    style={{color: '#000'}}
                            to={`${match.url}/0`}
                            activeClassName='active2'
                            activeStyle={{color: 'pink'}}>
                    <button>First-params：1</button>
                </NavLink>
                <NavLink    style={{color: '#000'}}
                            to={`${match.url}/1`}
                            activeClassName='active2'
                            activeStyle={{color: 'pink'}}>
                            {/*isActive={ () => true}
                            exact(bool)：为true时，只有当导致和完全匹配class和style才会应用
                            strict(bool)：为true时，在确定为位置是否与当前URL匹配时，将考虑位置pathname后的斜线*/}
                    <button>First-params：2</button>
                </NavLink>
                
                {/* children使用方式与render一致，只不过无论路由是否匹配都会被渲染 但是跟render一样 只有path匹配才有回调的 match 对象 不匹配为null */}
                <Route  path={`${match.path}/:id?`}   //设置params非必传：? 枚举params(0|1)
                        render={ ({match}) => (
                            <Fragment>
                                {match.params.id ? (
                                    //<FirstList /> 写成这种形式需要传递{...props} 或 组件内使用withRouter
                                    <Route path={`${match.path}`} component={FirstList} />
                                ) : (
                                    <div>Select</div>
                                )}
                            </Fragment>
                        )} />
            </div>
        )
    }
}