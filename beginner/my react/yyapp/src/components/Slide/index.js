import React,{Component,Fragment} from 'react'

class Slide extends Component{
    state = {
        slideDirection: 'slideDirection'
    }
    render(){
        return(
            <Fragment>
                <div style={style.div} onTouchStart={this.touchStart.bind(this)}>
                    <span>
                        {this.state.slideDirection}
                    </span>
                </div>
            </Fragment>
        )
    }

    touchStart(e){
        document.body.style.height = window.innerHeight + 'px'
        const _this = this
        const startX = e.changedTouches[0].clientX
        const startY = e.changedTouches[0].clientY
        e.target.addEventListener('touchmove', function(e){
            const moveX = e.changedTouches[0].clientX
            const moveY = e.changedTouches[0].clientY
            const difX = moveX - startX
            const difY = moveY - startY
            if(difX > 0 && Math.abs(difX) > Math.abs(difY)){
                _this.setState({
                    slideDirection: 'Right slide'
                })
            }
            else if(difX < 0 && Math.abs(difX) > Math.abs(difY)){
                _this.setState({
                    slideDirection: 'Left slide'
                })
            }
            else if(difY > 0 && Math.abs(difY) > Math.abs(difX)){
                _this.setState({
                    slideDirection: 'Down slide'
                })
            }
            else if(difY < 0 && Math.abs(difY) > Math.abs(difX)){
                _this.setState({
                    slideDirection: 'Up slide'
                })
            }
        })
        e.target.addEventListener('touchend', function(e){
            this.removeEventListener('touchmove',null)
        })
    }
}

const style = {
    div: {
        width: '100%',
        height: '3rem',
        background: '#ccc',
        textAlign: 'center'
    }
}

export default Slide