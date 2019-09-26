import React,{Component} from 'react'

export default class TextAndCheckbox extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: '',
            checkBox: true,
            arr: []
        }
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }
    render(){
        const {state} = this
        return(
            <div style={{border: '1px #000 solid'}}>
                <p>TextAndCheckbox：</p>
                <label htmlFor='text'>Text:</label>
                <input 
                    type="text" 
                    id='text' 
                    value={state.text} 
                    onChange={this.change}
                    onKeyUp={this.submit}
                /> &nbsp;&nbsp;
                <label htmlFor="checkBox">Boole:</label>
                <input 
                    type="checkbox" 
                    id='checkBox' 
                    checked={state.checkBox} 
                    onChange={this.change}
                /> &nbsp;&nbsp;
                <input 
                    type="submit" 
                    value='submit' 
                    onClick={this.submit}
                />
                <p>arr：{
                    state.arr.map( (item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }</p>
            </div>
        )
    }
    change(e){
        const t = e.target
        const name = t.id
        const value = t.type == 'checkbox' ? t.checked : t.value
        // !! 对象键接受变量
        this.setState({
            [name]: value
        },() => {
            if(this.state.text.length == 0){
                this.setState({
                    arr: []
                })
            }
        })
    }
    submit(e){
    			if(e.keyCode != 13 && e.target.type != 'submit'){
    				return
    			}
        const arr = [...this.state.text,this.state.checkBox + '']
        this.setState({
            arr
        })
    }
}