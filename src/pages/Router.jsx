import React, { Component } from 'react'

import { Route , Switch , Redirect  } from 'react-router-dom'

import Index from './Index'
import Page404 from './Page404'
import City from './home/City'
import Classic from './home/Classic'
import ClassicDetails from './home/ClassicDetails'

import SiteDetail from './category/views/components/SiteDetail/SiteDetail'

export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* <Route path='/details' component={Details} ></Route> */}
                    
                    <Route path='/category/site/detail' component={SiteDetail}></Route>

                    <Route path='/index' component={Index} ></Route>
                    <Redirect from='/' exact to='/index/home'></Redirect> 
                    <Route path='/city' component={City} exact></Route>
                    <Route path='/classic' component={Classic} exact></Route>
                    <Route path='/classic/:type' component={ClassicDetails} exact></Route>
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
