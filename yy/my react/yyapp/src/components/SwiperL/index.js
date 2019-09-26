import React,{Component} from 'react'
import './style.scss'
// import homeApi from '@/api/home'
// import store from '@/store/'
import '@/lib/css/swiper.css'
import '@/lib/css/animate.css'
var Swiper = window.Swiper

class SwiperL extends Component{
	constructor(props){
		super(props)
	}
	
	componentDidMount(){
		new Swiper('.swiper-container', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 3000,
				stopOnLastSlide: false,
				disableOnInteraction: true,
				},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

	render(){
		console.log('Home',this)
		return(
			<div>
				<div className="swiper-container" ref='swiper_container'>
					<div className="swiper-wrapper">
						<div className="swiper-slide" style={{background:'#eee'}}>Slide 1</div>
						<div className="swiper-slide" style={{background:'#f00'}}>Slide 2</div>
						<div className="swiper-slide" style={{background:'#999'}}>Slide 3</div>
					</div>

					<div className="swiper-pagination"></div>
					
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</div>
			</div>
		)
	}
}

export default SwiperL