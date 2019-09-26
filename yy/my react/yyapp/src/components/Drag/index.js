import React,{Component} from 'react'
import styleModule from './style.scss'

class Drag extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 0
        }
        this.touchStart = this.touchStart.bind(this)
    }
    render(){
        return(
            <div className={styleModule.drag}>
                <p style={style.p2}>Drag：</p>
                <div style={style.div2}>
                    <span style={style.span1}></span>
                    <span style={style.span2}>{this.state.num}%</span>
                    <p 
                        style={style.p}
                        onTouchStart={this.touchStart}
                    ></p>
                </div>
                {
                    React.Children.map(this.props.children,(item,index) => (
                        <div key={index}>{item}</div>
                    ))
                }
            </div>
        )
    }
    touchStart(e){
        // if(e.touches.length == 1){
        //     e.preventDefault()
        // }
        const target = e.target
        const parentNode = e.target.parentNode
        const firstTouchX = e.touches[0].clientX - parentNode.offsetLeft - target.offsetLeft
        target.ontouchmove = (e) => {
            let left = e.touches[0].clientX - parentNode.offsetLeft - firstTouchX
            if(left >= parentNode.offsetWidth - target.offsetWidth){
                left = parentNode.offsetWidth - target.offsetWidth
            }
            if(left <= 0){
                left = 0
            }
            this.setState({
                num: (left / (parentNode.offsetWidth - target.offsetWidth) * 100).toFixed(0)
            })
            target.style.left = left + 'px'
        }
        target.ontouchend = () => {
            target.ontouchmove = null
            target.ontouchend = null
        }
    }
}

const style = {
    div1: {
        border: '1px #000 solid',
        height: '50px',
        textAlign: 'center',
        position: 'relative',
    },
    div2: {
        position: 'relative',
        display: 'inline-block',
        fontSize: 0,
        verticalAlign: 'middle',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        width: '80%',
    },
    span1: {
        display: 'inline-block',
        width: '100%',
        borderBottom: '1px #f00 solid',
    },
    span2: {
        fontSize: '10px',
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        margin: 0
    },
    p: {
        border: '1px #ccc solid',
        borderRadius: '50%',
        height: '50px',
        width: '50px',
        position: 'absolute',
        top: 0,
        left: 0
    },
    p2: {
        position: 'absolute',
        top: 0,
        left: 0
    }
}

export default Drag