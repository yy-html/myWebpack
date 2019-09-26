import React,{Component} from 'react'
import TemperatureInput from './TemperatureInput'
import Boiling from './Boiling'

class LiftingStateUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            type: 'C',
            temperatureVal: '',
            list: []
        }
        this.temperatureChange = this.temperatureChange.bind(this)
    }

    render(){
        const {type,temperatureVal} = this.state
        const celsius = type === 'C' ? temperatureVal : tryConvert(temperatureVal,toCelsius)
        const fahrenheit = type === 'F' ? temperatureVal : tryConvert(temperatureVal,toFahrenheit)
        console.log('celsius：',celsius,'fahrenheit：',fahrenheit)
        return(
            <div>
                {this.state.list.map( (item,index) => (
                    <span   key={index}>{item}</span>
                ))}
                C：<TemperatureInput    type={'C'}
                                        temperatureVal={celsius}
                                        temperatureChange={this.temperatureChange}/>
                F：<TemperatureInput    type={'F'}
                                        temperatureVal={fahrenheit}
                                        temperatureChange={this.temperatureChange}/>
                <Boiling    temperatureVal={celsius} />{/*不能通过ref获取无状态组件,因为他们没有实例*/}
            </div>
        )
    }
    
    temperatureChange({temperatureVal,type}){
        this.setState({
            type,
            temperatureVal
        })
    }
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

function toCelsius(fahrenheit) {
    if(fahrenheit == ''){
        return
    }
    return (parseFloat(fahrenheit) - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    if(celsius == ''){
        return
    }
    return (parseFloat(celsius) * 9 / 5) + 32;
}

export default LiftingStateUp