import React from "react"
import { Route, HashRouter, Switch } from "react-router-dom"

import Home from "../pages/Home/home"
import Listing from "../pages/Listing/listing"
import Lottery from "../pages/Lottery/lottery"
import Mine from "../pages/Mine/mine"
import NotFount from "../pages/NotFound/notFound"

export default class AppRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route exact path="/listing" component={ Listing }></Route>
                    <Route exact path="/lottery" component={ Lottery }></Route>
                    <Route exact path="/Mine" component={ Mine }></Route>
                    <Route exact path="*" component={ NotFount }></Route>
                </Switch>
            </HashRouter>
        )
    }
}