import React, {Component,Fragment} from 'react'

export default class Total extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: props.num
        }
        this.do = this.do.bind(this)
    }
    do(type){
        if(type){
            this.setState({
                num: this.state.num + 1
            })
            this.props.totalDo(1)
        }else{
            this.setState({
                num: this.state.num - 1
            })
            this.props.totalDo(0)
        }
    }
    render(){
        return(
            <Fragment>
                <span>Total:</span>
                <button onClick={ () => this.do(1) }>&nbsp;&nbsp;+&nbsp;&nbsp;</button>
                {this.state.num}
                <button onClick={ () => this.do(0) }>&nbsp;&nbsp;-&nbsp;&nbsp;</button>
            </Fragment>
        )
    }
}