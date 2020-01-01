import React from "react"
import './index.less'
import news from './../../../static/images/home/news.png'
import searchIcon from './../../../static/images/home/search.png'
import HomeSwiper from './HomeSwiper'
export default class HomeHeader extends React.Component{
    state = {
        inputValue:''
        }
    render(){
        return(
            <div className="wrap_header">
              <header className="headerBg">
                <div className="search clearfix">        
                   <img src={searchIcon} alt="" className="searchIcons"/>
                   <input type="text"  value={this.state.value} placeholder="Search for what you want" className="inputStyle">
                   </input>
                   <img src={news} alt="" className="icon"/>
                </div>
                 <HomeSwiper/>
              </header>
            </div>
           
        )
    }
}
