import React from "react"
import { Carousel} from 'antd-mobile';
import './index.less'

const slideList = [
    {
      id: "01",
      imgpic: require("./../../../static/images/home/banner1.jpg")
    },
    {
      id: "02",
      imgpic: require("./../../../static/images/home/banner2.jpg")
    },
    {
      id: "03",
      imgpic: require("./../../../static/images/home/banner3.jpg")
    }
  ]
export default class HomeSwiper extends React.Component{
    state = {
        imgHeight: '7.8rem',
      }
      componentDidMount() {
       
      }
    render(){
        return(
          <div className="swiper">
            <Carousel
              autoplay={false}
              infinite
              className="swiper_wraps"
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
              dotActiveStyle={{width:'.7rem',height:'.3rem',borderRadius:'.15rem',background:'white'}}
              dotStyle={{width:'.3rem',height:'.3rem',}}
              style={{ width: '17.5rem', height:'7.8rem'}}
            >
              {
              slideList.map((item,index)=> (
                <a
                  key={index}
                  style={{ display: 'inline-block', width: '17.5rem', height: this.state.imgHeight  }}
                >
                  <img
                    className="wrap_swiper_drop"
                    src={item.imgpic}
                    alt=""
                    style={{ width: '17.5rem', verticalAlign: 'top',height:'7.8rem' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
        )
    }
}
