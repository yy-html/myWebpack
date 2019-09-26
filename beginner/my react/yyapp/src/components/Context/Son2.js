import React,{Component} from 'react'
 
class Son2 extends Component{
    state = {}

    render(){
        console.log('Son2-render',this)
        return(
            <div>
                <p ref={this.props.divRef}>Son2</p>
            </div>
        )
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('Son2-getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Son2-componentDidMount')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('Son2-shouldComponentUpdate')
    return true
    }
    getSnapshotBeforeUpdate(){
        console.log('Son2-getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('Son2-componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('Son2-componentWillUnmount')
    }
    componentDidCatch(){
        console.log('Son2-componentDidCatch')
    }
}

export default Son2