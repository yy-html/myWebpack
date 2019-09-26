import React,{Component} from 'react'
import { Carousel } from 'antd-mobile'

class AntDM extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        }
    }
    componentDidMount() {
    // simulate img loading
        setTimeout(() => {
            this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI','fefsdfs'],
            });
        }, 100);
    }
    render(){

        return(
            <div>
                <Carousel
                autoplay={true}
                infinite={true}
                autoplayInterval={1000}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {this.state.data.map( (val,index) => (
                    <div
                    key={val}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    {
                        this.state.list.map( (item,index2) => {
                            if(index2 >= index*10 && index2 < index*10 + 10){
                                return item
                            }
                        })
                    }
                    </div>
                ))}
                </Carousel>
            </div>
        )
    }
}

export default AntDM