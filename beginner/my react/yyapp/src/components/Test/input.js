import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'

class Input extends Component{  
    constructor(props){
        super(props)
        this.state = {

        }
    }
    static propTypes = {
        placeholder: PropTypes.string.isRequired
    }
    static defaultProps = {
        placeholder: 'PropTypes'
    }
    // static contextTypes = {
    //     fatherMsg: PropTypes.string
    // }
    render(){
        console.log('Input-render',this)
        return (
            <div style={{border: '1px #000 solid'}}>
                <p>Input：</p>
                <input
                    type={this.props.type} 
                    ref='input'
                    placeholder={this.props.placeholder}
                    onChange={this.props.change}
                />
                {
                    this.props.display &&
                    <span onClick={ () => this.props.click('text')}>{this.props.del}</span>
                }
                
                <span>{this.props.value}</span>
            </div>
        )
    }

    static getDerivedStateFromProps(){
        console.log('Input-getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Input-componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('Input-shouldComponentUpdate')  
        return true      
    }
    getSnapshotBeforeUpdate(){
        console.log('Input-getSnapshotBeforeUpdate') 
        // if(nextProps.value === this.props.value){
        //     return false
        // }
        // console.log(nextProps.value)
        // console.log(this.props.value)
        return null 
    }
    componentDidUpdate(){
        console.log('Input-componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('Input-componentWillUnmount')
      }
    componentDidCatch(){
        console.log('Input-componentDidCatch')
    }
}

export default Input