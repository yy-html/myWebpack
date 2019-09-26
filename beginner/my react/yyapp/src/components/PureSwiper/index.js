import React,{Component,Fragment} from 'react'
import './style.scss'

class PureSwiper extends Component{
    constructor(props){
        super(props)
        this.state = {
            listBG: [],
            canMove: true
        }
        this.ul = React.createRef()
        this.touchStart = this.touchStart.bind(this)
    }

    render(){
        return(
            <Fragment>
                <div style={style.div}>
                    <ul ref={this.ul} onTouchStart={this.touchStart} style={style.ul}>
                        <li style={style.li}>page1</li>
                        <li style={style.li}>page2</li>
                        <li style={style.li}>page3</li>
                    </ul>
                </div>
                <br />
                <div>
                    <ul>
                    {this.state.listBG.map( (item,index) => (
                        <li key={index}>
                            {`page${index+1}BG`}：{item}
                            <span className='litleColorBox' style={ {background: item} }></span>
                        </li>
                    ))}
                    </ul>
                </div>
            </Fragment>
        )
    }
    
    componentDidMount(){
        const oUl = this.ul.current
        const oLiNodes = Array.from(oUl.children)
        const oLisLength = oUl.children.length + 2  //前后两个Fake节点
        //动态设置宽度
        const oLiWidth = 100/oLisLength + '%'
        const oUlWidth = oLisLength + '00%'
        oUl.style.width = oUlWidth
        oLiNodes.forEach( item => {
            item.style.width = oLiWidth
        })
        //设置初始ul left值
        oUl.style.left = - oLiNodes[0].offsetWidth + 'px'
        //添加Fake节点
        const fakeFirstLi = oLiNodes[0].cloneNode(true)
        oUl.appendChild(fakeFirstLi)
        const fakeLastLi = oLiNodes[oLisLength - 3].cloneNode(true)
        oUl.insertBefore(fakeLastLi,oLiNodes[0])
        //获取背景色
        let listBG = []
        oLiNodes.forEach( item => {
            listBG.push(item.style.backgroundColor)
        })
        this.setState({
            listBG
        })
        // auto play
        this.autoPlay()

        // window.onfocus = () => {
        //     this.autoPlay()
        // }

        // window.onblur = () => {
        //     clearInterval(this.aotuPlayTimer)
        //     clearInterval(this.moveTimer)      
        //     this.autoPlay()
        // }
    }

    touchStart(e){
        //stop autoPlay
        clearInterval(this.aotuPlayTimer)
        clearInterval(this.moveTimer)
        //记录鼠标按下位置
        const _this = this
        const target = this.ul.current
        const oLi = target.children[0]
        const firstTouchX = e.touches[0].clientX
        const firstOffsetLeft = target.offsetLeft
        //回弹过程中如果再次拖拽 必需停止之前的计时器
        clearInterval(target.timer)
        //拖拽
        target.addEventListener('touchmove',function(e){
            const touchingX = e.touches[0].clientX
            const dis = touchingX - firstTouchX + firstOffsetLeft
            this.style.left = dis + 'px'
            console.log(this.offsetLeft)
        })
        //拖拽结束
        target.addEventListener('touchend',function(e){
            //停止上次计时器
            clearInterval(this.timer)
            //清除move事件 并记录回弹目标位置
            this.removeEventListener('touchmove',null)
            const flag = Math.round(this.offsetLeft / oLi.offsetWidth)
            const nodesLength = this.children.length
            const targetLeft = oLi.offsetWidth*flag
            //判断回弹方向; 如果手动拖拽正好到了目标位置 那么直接退出事件 否则出bug
            if(this.offsetLeft === targetLeft) return
            const addOrSub = this.offsetLeft > targetLeft ? false : true
            //开始回弹
            this.timer = setInterval( () => {
                //设置回弹速度offsetLeft > targetLeft ? trueOrFalse = false 说明要往左回弹 left需要 --
                const speed = addOrSub ? 10 : -10
                this.style.left = this.offsetLeft + speed + 'px'
                //回弹停止条件; 如果最后一次的速度大于目标值减当前left值 则直接到达目标值
                if(Math.abs(targetLeft - this.offsetLeft) <= Math.abs(speed)){
                    this.style.left = targetLeft + 'px'
                    clearInterval(this.timer)
                    //轮播无限循环条件
                    if(this.offsetLeft >= 0){
                        this.style.left = - (nodesLength - 2) * oLi.offsetWidth + 'px'
                    }
                    if(this.offsetLeft <= - (nodesLength - 1) * oLi.offsetWidth){
                        this.style.left = - oLi.offsetWidth + 'px'
                    }
                    //start autoPlay
                    _this.autoPlay()
                }
                console.log(this.offsetLeft)
            },15)
        })
    }
    
    autoPlay(){
        const oUl = this.ul.current
        const oLi = oUl.children[0]
        
        this.aotuPlayTimer = setInterval( () => {
            // this.flag = false
            const flag = Math.ceil((oUl.offsetLeft) / oLi.offsetWidth)
            const targetLeft = (flag - 1) * oLi.offsetWidth
            clearTimeout(this.moveTimer)
            
            this.moveTimer = setInterval( () => {
                oUl.style.left =  oUl.offsetLeft - 10 + 'px'
                if(oUl.offsetLeft <= targetLeft){
                    oUl.style.left = targetLeft + 'px'
                    if(oUl.offsetLeft >= 0){
                        oUl.style.left = - (oUl.children.length - 2) * oLi.offsetWidth + 'px'
                    }
                    if(oUl.offsetLeft <= - (oUl.children.length - 1) * oLi.offsetWidth){
                        oUl.style.left = - oLi.offsetWidth + 'px'
                    }
                    clearInterval(this.moveTimer)
                }
                console.log('moveTimer',this.aotuPlayTimer,this.moveTimer)
            },15)
        },3000)
    }

    componentWillUnmount(){
        clearInterval(this.aotuPlayTimer)
        clearInterval(this.moveTimer)
        clearInterval(this.ul.current.timer)
    }
}

const style = {
    div: {
        overflow: 'hidden',
        width: '100%',
        height: '3rem',
        position: 'relative'
    },
    ul: {
        position: 'absolute',
        listStyle: 'none',
        height: '100%',
        // width: 动态设置
    },
    li: {
        height: '100%',
        float: 'left',
        background: null,
        // width: 动态设置
    }
}

Object.defineProperties(style.li,{
    background: {
        get(){
            return '#' + Math.floor(Math.random()*0xffffff).toString(16)
        }
    }
})

export default PureSwiper