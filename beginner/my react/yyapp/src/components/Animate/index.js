import React, {Component} from 'react'
import './style.scss'
import '@/lib/css/swiper.css'
import '@/lib/css/animate.css'
import indexBuilding from '@/lib/images/indexBuilding.png'
import indexCloud from '@/lib/images/indexCloud.png'
import indexElements from '@/lib/images/indexElements.png'
import indexFlight from '@/lib/images/indexFlight.png'
import indexTxt from '@/lib/images/indexTxt.png'

var Swiper = window.Swiper
var swiperAnimate = window.swiperAnimate
var swiperAnimateCache = window.swiperAnimateCache


class Animate extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    componentDidMount(){
        new Swiper ('.swiper-container', {
            direction: 'vertical',
            on:{
              init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
              },
              slideChangeTransitionEnd: function(){ 
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
              } 
            }
        }) 

        
    }

    render(){

        return(
            <div className='animate'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className='indexBuilding ab'>
                                <img 
                                src={indexBuilding}
                                className="ani"
                                swiper-animate-effect="fadeIn" 
                                swiper-animate-duration="1s" 
                                swiper-animate-delay="0.1s" 
                                />
                            </div>
                            <div 
                            className='indexCloud ab ani alternate infinite linear'
                            swiper-animate-effect="zoomAlways" 
                            swiper-animate-duration="1.6s"
                            swiper-animate-delay="1.8s"
                            >
                                <img 
                                src={indexCloud}
                                className="ani"
                                swiper-animate-effect="zoomIn" 
                                swiper-animate-duration="1s" 
                                swiper-animate-delay="0.8s" 
                                />
                            </div>
                            <div 
                            className='indexElements ab ani alternate infinite linear'
                            swiper-animate-effect="zoomAlways" 
                            swiper-animate-duration="1.6s"
                            swiper-animate-delay="2.1s"
                            >
                                <img 
                                src={indexElements}
                                className="ani"
                                swiper-animate-effect="zoomIn" 
                                swiper-animate-duration="1s" 
                                swiper-animate-delay="0.8s" 
                                />
                            </div>
                            <div className='indexTxt ab'>
                                <img 
                                src={indexTxt}
                                className="ani"
                                swiper-animate-effect="fadeIn" 
                                swiper-animate-duration="1s" 
                                swiper-animate-delay="0.5s" 
                                />
                            </div>
                            <div 
                            className='indexFlight ab ani alternate infinite'
                            swiper-animate-effect="zoomAlways" 
                            swiper-animate-duration="1.6s"
                            swiper-animate-delay="2.3s"
                            >
                                <img 
                                src={indexFlight}
                                className="ani"
                                swiper-animate-effect="zoomInDown" 
                                swiper-animate-duration="1s" 
                                swiper-animate-delay="1.4s"
                                />
                            </div>
                        </div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Animate