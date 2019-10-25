import React, { Component } from 'react'

import { Route , Switch , Redirect  } from 'react-router-dom'

import Index from './Index'
import Page404 from './Page404'
import City from './home/City'
import Classic from './home/Classic'
import ClassicDetails from './home/ClassicDetails'
<<<<<<< HEAD

import SiteDetail from './category/views/components/SiteDetail/SiteDetail'
import {Order} from './orders/index'
import Timer from './timer/time'
=======
>>>>>>> guangruixiao

import SiteDetail from './category/views/components/SiteDetail/SiteDetail'
import {Order} from './orders/index'
import Timer from './timer/time'



import Edit from './eidt/eidt'
import MyOrder from './myOrder/MyOrder'
import Enterprise from './profile/Enterprise'
import Notice from './profile/Notice'
import Set from './profile/Set'
import LicenseAgreement from './profile/LicenseAgreement'



export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* <Route path='/details' component={Details} ></Route> */}
                    
                    <Route path='/category/site/detail' component={SiteDetail}></Route>
                    {/* <Route path='/order/:id' component={Order} exact></Route> */}
                    <Route path='/order/:type' component={Order} exact></Route>
                    <Route path='/timer' component={Timer} exact></Route>
                    <Route path='/index' component={Index} ></Route>
                    <Route path='/city' component={City} exact></Route>
                    <Route path='/classic' component={Classic} exact></Route>
                    <Route path='/classic/:type' component={ClassicDetails} exact></Route>
                    <Route path='/edit' component={Edit} exact></Route>
                    <Route path='/myorder' component={MyOrder}></Route>
                    <Route path='/enterprise' component={Enterprise}></Route>
                    <Route path='/notice' component={Notice}></Route>
                    <Route path='/set' component={Set}></Route>
                    <Route path='/license' component={LicenseAgreement}></Route>
                    <Redirect from='/' exact to='/index/home'></Redirect> 
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
