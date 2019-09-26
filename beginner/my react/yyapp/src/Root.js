//React
import React,{Component} from 'react'
import {Route,Switch,Redirect,withRouter,Prompt} from 'react-router-dom'
import PropTypes from 'prop-types'
import {CSSTransition,TransitionGroup} from 'react-transition-group';

//Components
import App from '@/App'
import SwiperL from '@/components/SwiperL/'
import AntDM from '@/components/AntD-M/'
import AntD from '@/components/AntD/'
import On_off from '@/components/On_off/'
import A from '@/components/Hoc/A'
import Test from '@/components/Test/'
import Animate from '@/components/Animate/'
import NestRouter from '@/components/NestRouter/'
import PubSub from '@/components/PubSub/'
import Context from '@/components/Context/'
import LiftingStateUp from '@/components/LiftingStateUp/'
import PureSwiper from '@/components/PureSwiper/'
import Slide from '@/components/Slide/'
//404
import NotFound from '@/components/NotFound/'
//Route Com
import MyRoute from '@/components/MyRoute/'

//Context
import ContextProvider from '@/Context/CombineContextProvider.js'

//store
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from '@/store/actionCreator'

class Root extends Component{
    constructor(props){
        super(props)
        props.history.listen( (location) => {
            document.title = location.pathname
        })  //监听全局路由变化
        this.state = {
            msg: 'AppContext',
            msg2: 'App2Context',
            oldContext: 'oldContext'
        }
        this.handleContextChange = this.handleContextChange.bind(this)
    }

    render(){
        console.log(this)
        return(
            <ContextProvider>
                {/* <TransitionGroup>
                    <CSSTransition  key={this.props.location.pathname}
                                    classNames='fade'
                                    timeout={500}
                                    unmountOnExit> */}
                        <Switch location={this.props.location}>
                            <Route path='/animate'		    component={Animate} />
                            <Route path='/test/:id' 	    component={Test} />
                            <Route path='/swiperl' 		    component={SwiperL} />
                            <Route path='/antdm' 			component={AntDM} />
                            <Route path='/antd' 			component={AntD} />
                            <MyRoute path='/on_off' 	    component={On_off} />
                            <Route path='/hoc' 			    component={A} />
                            <Route path='/nestrouter' 	    component={NestRouter} />
                            <Route path='/pubsub' 		    component={PubSub} />
                            <Route path='/context/:id?'     component={Context} />
                            <Route path='/liftingstateup'   component={LiftingStateUp} />
                            <Route path='/index' 		    component={App} />
                            <Route path='/pureswiper' 	    component={PureSwiper} />
                            <Route path='/slide' 	        component={Slide} />
                            <Redirect from='/' to='/index' exact />
                            <Route component={NotFound} />
                        </Switch>
                    {/* </CSSTransition>
                </TransitionGroup> */}
            </ContextProvider>
        )
    }
    //newContext
    handleContextChange(action){
        const {type,data} = action
        switch(type){
            case 'CHANGE_MSG':
                return this.setState({
                    msg: data
                })
        }
        return
    }
    //oldContext
    getChildContext(){  //本组件render()后调用
        return{
            oldContext: this.state.oldContext
        }
    }
    static childContextTypes = {
        oldContext: PropTypes.string
    }
}

const mapStateToProps = (state,props) => state
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreator,dispatch)
const newRoot = connect(mapStateToProps,mapDispatchToProps)(Root)//withRouter放里边就切换不了路由

export default withRouter(newRoot)