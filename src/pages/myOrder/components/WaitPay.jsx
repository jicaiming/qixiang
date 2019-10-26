import React, { Component } from 'react'

import _ from 'lodash'


import Order from 'components/profile/Order'
import None from 'components/profile/None'

import { Container } from '../StyleMyOrder'

export default class WaitPay extends Component {
    render() {
        let waitPayList = _.filter(this.props.list, (value, index) => {
            return value.orderMaster.orderStatus === 0
        })
        return (
            <Container>
                {waitPayList.length ? (waitPayList.map((value, index) => {
                    return <Order onClick={this.props.onClick} list={value} key={value.orderMaster.orderId}></Order>
                })) : (<None></None>)}
            </Container>
        )
    }
}
