import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import AppRouter from './router/AppRouter'
import FooterNav from "./components/FootNav/footNav.jsx"

class App extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    {
                      AppRouter.map((item,index)=>{
                        if(item.isShow){
                            if(item.exact){
                                return (
                                    <Route
                                    key={index}
                                    exact
                                    path={item.path}
                                    render={props=>(
                                        <item.component {...props}/>
                                    )}
                                    />
                                )
                            }else{
                                return (
                                    <Route
                                    key={index}
                                    path={item.path}
                                    render={props=>(
                                        <item.component {...props}/>
                                    )}
                                    />
                                )
                            }
                        }
                      })
                    }
                    <div>
                    <FooterNav/>
                    </div>
                </div>
            </Router>
        )
    }
}
export default App