// import React from "react"
// import { Route, HashRouter, Switch } from "react-router-dom"

import Home from "../pages/Home/home"
import Listing from "../pages/Listing/listing"
import Lottery from "../pages/Lottery/lottery"
import Mine from "../pages/Mine/mine"
import NotFount from "../pages/NotFound/notFound"

let routes = [
    {path:'/',component:Home,exact:true,isShow:true},
    {path:'/lottery',component:Lottery,isShow:true},
    {path:'/listing',component:Listing,isShow:true},
    {path:'/mine',component:Mine,isShow:true},
    {path:'*',component:NotFount,isShow:false},
  ]
  export default routes