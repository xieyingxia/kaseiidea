import React from "react"
import HomeHeader from './HomeModule/HomeHeader'
import HomeNoticeBar from './HomeModule/HomeNoticeBar'
import HomeList from './HomeModule/HomeList'
import './HomeModule/index.less'

export default class home extends React.Component{
    render(){
        return(
            <div className="HomeWrap">
              <HomeHeader/>
              <HomeNoticeBar/>
              <HomeList/>
            </div>
        )
    }
}