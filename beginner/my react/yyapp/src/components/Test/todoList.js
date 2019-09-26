import React,{Component,Fragment} from 'react'
import PropTypes from 'prop-types'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '@/store/actionCreator'


class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        type: PropTypes.string,
        value: PropTypes.any,
        change: PropTypes.func,
        click: PropTypes.func,
        liClick: PropTypes.func
    }
    static defaultProps = {
        //placeholder: 'defaultProps',  //必填的prop就不要在defaultProps里定义了,定义了就不会抱没传的警告了
        type: 'text',
        value: '',
    }

    render(){
        console.log('TodoList-render',this)
        let props = this.props
        return (
            <Fragment>
                <div style={{border: '1px #000 solid'}}>
                    <p>TodoList </p>
                    <input 
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.change}
                        onKeyUp={props.click}
                    />
                    <button onClick={props.click}>button</button>
                    <br />
                    <p>props.value：{props.value}</p>
                    <ul>
                        <TransitionGroup>
                        {
                            props.todoList.map( item => (
                                <CSSTransition
                                    classNames='fade'
                                    timeout={500}
                                    key={item.id}
                                >
                                    <li key={item.id} onClick={ () => props.deleteLi(item.id) }>
                                    {/*为了传index, 包一个函数*/}
                                        {item.val}
                                    </li>
                                </CSSTransition>
                            ))
                        }
                        </TransitionGroup>
                    </ul>
                </div>
            </Fragment>
        )
    }
    static getDerivedStateFromProps(){
        console.log('TodoList-getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('TodoList-componentDidmount')
    }
    shouldComponentUpdate(){
        console.log('TodoList-shouldComponentUpdate')  
        return true      
    }
    getSnapshotBeforeUpdate(){
        console.log('TodoList-getSnapshotBeforeUpdate') 
        return null 
    }
    componentDidUpdate(){
        console.log('TodoList-componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('TodoList-componentWillUnmount')
      }
    componentDidCatch(){
        console.log('TodoList-componentDidCatch')
    }

}
// const TodoList = (props) => (
//     <Fragment>
//         <div style={{border: '1px #000 solid'}}>
//             <p>TodoList</p>
//             <input 
//                 type={props.type}
//                 placeholder={props.placeholder}
//                 value={props.value}
//                 onChange={props.change}
//             />
//             <button onClick={props.click}>button</button>
//             <br />
//             <p>props.value：{props.value}</p>
//             <ul>
//                 {
//                     props.todoList.map( (item,index) => (
//                         <li key={index} onClick={props.liClick}>{item}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     </Fragment>
// )

// TodoList.propTypes = {
//     placeholder: PropTypes.string.isRequired,
//     type: PropTypes.string,
//     value: PropTypes.any,
//     change: PropTypes.func,
//     click: PropTypes.func,
//     liClick: PropTypes.func
// }
// TodoList.defaultProps = {
//     // placeholder: 'defaultProps',  //必填的prop就不要在defaultProps里定义了,定义了就不会抱没传的警告了
//     type: 'text',
//     value: '',
// }
console.log((new TodoList()).__proto__ === TodoList.prototype)
console.log(TodoList.prototype.__proto__ === Component.prototype)
console.log(Component.prototype.__proto__ === Object.prototype)
console.log(TodoList.__proto__ === Component)
console.log(Component.__proto__ === Function.prototype)

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => bindActionCreators(actionCreator,dispatch)
const NewTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default NewTodoList

