import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom";
import intl from 'react-intl-universal'
import IndexPageHeader from '../src/pages/indexPage/indexPageHeader'
import AppRouter from './router/AppRouter'
class App extends React.Component {
    render () {
        return (           
            <Router> 
                <IndexPageHeader/>  
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
        </Router> 
     
        )
    }
}
export default App