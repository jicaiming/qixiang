import React, { Component } from 'react'

import Order from 'components/profile/Order'
import None from 'components/profile/None'

export default class WaitPay extends Component {
    state={
        is: false
    }
    render() {
        return (
            <>
                {this.state.is ? (<Order list={this.props.list}></Order>) : (<None></None>)}
            </>
        )
    }
    componentDidMount(){
        // console.log(this)
    }
}
