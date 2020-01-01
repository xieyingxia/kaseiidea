import React from "react"
import { NavLink } from "react-router-dom"
import './footNav.less'
import homeImg from "../../static/images/tabBar/home.png"
import homeActiveImg from "../../static/images/tabBar/home-active.png"
import lotteryImg from "../../static/images/tabBar/lottery.png"
import lotteryActiveImg from "../../static/images/tabBar/lottery-active.png"
import listImg from "../../static/images/tabBar/list.png"
import listActiveImg from "../../static/images/tabBar/list-active.png"
import meImg from "../../static/images/tabBar/me.png"
import meActiveImg from "../../static/images/tabBar/me-active.png"
const tabList = [
    {
        title:"Home",
        key:"home",
        icons:{
            img:homeImg,
            imgActive:homeActiveImg,
        },
        path:"/"
    },
    {
        title:"Lottery",
        key:"lottery",
        icons:{
            img:lotteryImg,
            imgActive:lotteryActiveImg,
        },
        path:"/lottery"
    },
    {
        title:"Listing",
        key:"listing",
        icons:{
            img:listImg,
            imgActive:listActiveImg,
        },
        path:"/listing"
    },
    {
        title:"Mine",
        key:"mine",
        icons:{
            img:meImg,
            imgActive:meActiveImg,
        },
        path:"/mine"
    },
]
export default class footNav extends React.Component{
    state = {
            selectedTab:"home",  
            hidden:false
            }
    render(){
        return(
            <div className="nav-footer" style={{'display': this.state.hidden ? 'none' : 'block'}}>
                <ul className="clearfix">
                    {  
                     tabList.map((item,index)=>{
                            return( 
                            <li key={index} >
                                <NavLink to={item.path}  exact onClick={()=>{
                                    this.setState({
                                        selectedTab:item.key
                                    })
                                }}>
                                    {
                                    this.state.selectedTab === item.key?
                                    <img  src={item.icons.imgActive} alt=""/>  : <img src={item.icons.img} alt=""/>
                                    }
                                    <span className={this.state.selectedTab === item.key? "active":""} >{item.title}</span>
                                </NavLink>  
                            </li>
                            )  
                        })
                        
                    }

                </ul>    
            </div>
        )
    }
}

