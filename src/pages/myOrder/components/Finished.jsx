import React, { Component } from 'react'


import Order from 'components/profile/Order'
import None from 'components/profile/None'

export default class Finished extends Component {
    render() {
        return (
            <>
                 {this.props.list.length ? (this.props.list.map((value, index) => {
                    return <Order list={value} key={value.orderMaster.orderId}></Order>
                })) : (<None></None>)}
            </>
        )
    }
}
