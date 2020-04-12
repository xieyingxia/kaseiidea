import React from "react"
import IndexPageList from './indexPageList.jsx'
import IndexPageImage from './indexPageImage.jsx'
import './index.less'
import { Carousel} from 'antd-mobile';
import thumb1 from '../../static/images/bannar/thumb_other.png'
import thumb2 from '../../static/images/bannar/thumb_digitalentertainment.png'
import thumb3 from '../../static/images/bannar/thumb_publishing.png'

 export default class indexPageCenter extends React.Component{

    render(){
        return(
            <div id="WrapCenter">
                <div className="lunbo">
                <Carousel
                    autoplay={false}
                    infinite="true"
                    id="size"
                  >
                    <a
                        style={{ display: 'inline-block', width: '100%',  }}
                    >
                        <img
                        src={thumb1}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top',height:'667px'}}
                        />
                    </a>
                    <a
                       
                        style={{ display: 'inline-block', width: '100%',}}
                    >
                        <img
                        src={thumb2}
                        style={{ width: '100%', verticalAlign: 'top',height:'667px' }}
                        />
                    </a>
                    <a
                        style={{ display: 'inline-block', width: '100%',height:'667px' }}
                    >
                        <img
                        src={thumb3}
                        alt="thumb3"
                        style={{ width: '100%', verticalAlign: 'top' }}
                        />
                    </a>
                </Carousel>
                </div>
                <div className="wrapList">
                  <IndexPageList/>
                  <IndexPageImage/>
                </div>
              
               
            </div>
        )
    }
}