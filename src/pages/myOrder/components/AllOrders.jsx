import React, { Component } from 'react'

import Order from 'components/profile/Order'
import None from 'components/profile/None'

import { Container } from '../StyleMyOrder'

export default class AllOrders extends Component {
    render() {
        return (
            <Container>
                {this.props.list.length ? (
                    this.props.list.map((value, index) => {
                        return <Order onClick={this.props.onClick} list={value} key={value.orderMaster.orderId}></Order>
                    })
                ) :
                    (<None></None>)}
            </Container>
        )
    }
}
