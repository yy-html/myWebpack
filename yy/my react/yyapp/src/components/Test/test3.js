import React,{Component} from 'react'

class Test3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            test: 0
        }
    }

    componentWillMount(){
        console.log('test-componentWillMount')
    }
    componentDidMount(){
        console.log('test-componentDidMount')
    }
    componentWillReceiveProps(){
        console.log('test-componentWillReceiveProps')
    }
    shouldComponentUpdate(){
        console.log('test-shouldComponentUpdate')
        return true
    }
    componentWillUpdate(){
        console.log('test-componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('test-componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('test-componentWillUnmount')
    }

    click(){
        console.log('setState')
        this.setState({
            test: 1
        })
    }

    render(){
        console.log('test-render')
        return(
            <div style={{border: '1px #000 solid'}}>
                <p>Test3：</p>
                <button onClick={this.click.bind(this)}>Test3</button>
            </div>
        )
    }
}

export default Test3