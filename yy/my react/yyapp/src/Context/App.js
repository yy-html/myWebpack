import React,{Component} from 'react'

export const AppContext = React.createContext('App')

export class AppContextCom extends Component{
    state = {
        msg: 'AppContext'
    }

    render(){
        return(
            <AppContext.Provider
                value={{
                    dispatch: this.handleContextChange.bind(this),
                    msg: this.state.msg
                }}
            >
            {this.props.children}
            </AppContext.Provider>
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