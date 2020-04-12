//import React from "react"
// import { Route, HashRouter, Switch } from "react-router-dom"
import indexPageCenter from '../pages/indexPage/indexPageCenter'
import grounpPage from '../pages/groupPage/grounpPage.jsx'
import intelligencePage from '../pages/intelligencePage/intelligencePage.jsx'
import introducePage from '../pages/introducePage/introducePage.jsx'
import newPage from '../pages/newPage/newPage.jsx'

let routes = [
    {path:'/',component:indexPageCenter,exact:true,isShow:true},
    {path:'/grounpPage',component:grounpPage,isShow:true},
    {path:'/intelligencePage',component:intelligencePage,isShow:true},
    {path:'/introducePage',component:introducePage,isShow:true},
    {path:'/newPage',component:newPage,isShow:true},
  ]
export default routes