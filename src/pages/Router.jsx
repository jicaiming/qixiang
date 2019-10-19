import React, { Component } from 'react'

import { Route , Switch , Redirect  } from 'react-router-dom'

import Signin from './signin/Index'

import Index from './Index'
import Page404 from './Page404'
import City from './home/City'
import Classic from './home/Classic'
import ClassicDetails from './home/ClassicDetails'

import SiteDetail from './category/views/components/SiteDetail/SiteDetail'
// import Order from ' ./orders'


import Edit from './profile/Edit'
import MyOrder from './profile/MyOrder'




export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* <Route path='/details' component={Details} ></Route> */}
                    
                    <Route path='/category/site/detail' component={SiteDetail}></Route>
                    {/* <Route path='/orders/order' component={}></Route> */}
                    <Route path='/index' component={Index} ></Route>
                    <Route path='/myorder' component={MyOrder}></Route>
                    <Route path='/city' component={City} exact></Route>
                    <Route path='/classic' component={Classic} exact></Route>
                    <Route path='/classic/:type' component={ClassicDetails} exact></Route>
                    <Route path='/edit' component={Edit} exact></Route>
                    {/* <Redirect from='/' exact to='/index/home'></Redirect>  */}
                    
                    <Route path='/signin' component={Signin} ></Route>
                    <Redirect from='/' exact to='/signin'></Redirect> 
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
