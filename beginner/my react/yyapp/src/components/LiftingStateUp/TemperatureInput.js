import React,{Component} from 'react'

class TemperatureInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            temperatureVal: ''
        }
        this.change = this.change.bind(this)
    }

    render(){
        const {temperatureVal} = this.props
        return(
            <div>
                <input  type="text" 
                        value={temperatureVal}
                        onChange={this.change}/>
            </div>
        )
    }

    change(e){
        this.props.temperatureChange({
            type: this.props.type,
            temperatureVal: e.target.value
        })
    }
}

export default TemperatureInput
