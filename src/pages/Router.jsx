import React, { Component } from 'react'

import { Route , Switch , Redirect  } from 'react-router-dom'

import Index from './Index'
import Page404 from './Page404'
import City from './home/City'
import Classic from './home/Classic'


import Edit from './profile/Edit'
import MyOrder from './profile/MyOrder'




export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* <Route path='/details' component={Details} ></Route> */}

                    <Route path='/index' component={Index} ></Route>
                    <Route path='/myorder' component={MyOrder}></Route>
                    <Route path='/city' component={City} exact></Route>
                    <Route path='/classic' component={Classic} exact></Route>
                    <Route path='/edit' component={Edit} exact></Route>
                    <Redirect from='/' exact to='/index/home'></Redirect> 
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
