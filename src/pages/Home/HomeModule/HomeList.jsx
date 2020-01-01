import React from "react"
import './index.less'
import api from "../../../api"
export default class HomeList extends React.Component{
   componentDidMount(){
        api.homeHot.homehotData().then(res=>res.json()).then(
            data =>{
                console.log(data)
            }
        )
   }
    render(){
        return(
            <div id="ListDetail">
                <div className="list">
                </div>
            </div>
        
           
        )
    }
}
