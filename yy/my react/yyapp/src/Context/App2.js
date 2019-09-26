import React,{Component} from 'react'

export const App2Context = React.createContext('App2')

export class App2ContextCom extends Component{
    state = {
        msg: 'App2Context'
    }

    render(){
        return(
            <App2Context.Provider
                value={{
                    dispatch: this.handleContextChange.bind(this),
                    msg: this.state.msg
                }}
            >
            {this.props.children}
            </App2Context.Provider>
        )
    }

    handleContextChange(action){
        const {data} = action
        switch(action.type){
            case 'CHANGE_MSG':
                return this.setState({
                    msg: data
                })
        }
        return
    }
}
