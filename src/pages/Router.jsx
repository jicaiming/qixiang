import React, { Component } from 'react'

import { Route , Switch , Redirect  } from 'react-router-dom'

import Signin from './signin/Index'

import Index from './Index'
import Page404 from './Page404'
import City from './home/City'
import Classic from './home/Classic'
import ClassicDetails from './home/ClassicDetails'

export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* <Route path='/details' component={Details} ></Route> */}

                    <Route path='/index' component={Index} ></Route>
                    {/* <Redirect from='/' exact to='/index/home'></Redirect>  */}
                    <Route path='/signin' component={Signin} ></Route>
                    <Redirect from='/' exact to='/signin'></Redirect> 
                    <Route path='/city' component={City} exact></Route>
                    <Route path='/classic' component={Classic} exact></Route>
                    <Route path='/classic/:type' component={ClassicDetails} exact></Route>
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
