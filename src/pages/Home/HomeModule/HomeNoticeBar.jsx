import React from "react"
import { NoticeBar,WingBlank} from 'antd-mobile';
import './index.less'

const menuList = [
    {
      id: "01",
      imgpic: require("./../../../static/images/home/Commodity.png"),
      title: "Commodity"
    },
    {
      id: "02",
      imgpic: require("./../../../static/images/home/Postlist.png"),
      title: "Post list"
    },
    {
      id: "03",
      imgpic: require("./../../../static/images/home/Charge.png"),
      title: "Charge"
    },
    {
      id: "04",
      imgpic: require("./../../../static/images/home/MoneyBox.png"),
      title: "Money Box"
    }
  ]

export default class HomeNoticeBar extends React.Component{
    render(){
        return(
        <div className="homeCente">
            <div id="homeNoticeBar">
                 <WingBlank>
                  <NoticeBar  className="homeNoticeBar_input">
                        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                 </NoticeBar>
                 </WingBlank>
            </div>
            <div className="classify">
                   <ul className="clearfix">
                        {
                            menuList.map((item,key)=>{
                               return( 
                                <li key={key}>
                                    <img src={item.imgpic} alt=""/>
                                    <span>{item.title}</span>
                                </li>
                               )
                            })  
                        }
                   </ul>
            </div>
        </div>

        )
    }
}
