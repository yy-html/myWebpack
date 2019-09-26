import React,{Component} from 'react'
// import {withRouter} from 'react-router-dom'

class FirstList extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.match.id,
            list: []
        }
    }
    render(){
        console.log('FirstList',this)
        return(
            <div>
                <p>FitrstList</p>
                <ul>
                {this.state.list.map( (item,index) => (
                    <li key={index}> {item} </li>
                ))}
                </ul>
            </div>
        )
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('Being loaded...')
        const {id} = nextProps.match.params
        let list = null
        id == '1' ? list = [1,2,3] : list = [4,5,6]
        console.log('Loaded!')
        console.log(list)
        return {
            id,
            list
        }
    }
}

export default FirstList