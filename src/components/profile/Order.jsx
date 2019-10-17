import React, { Component } from 'react'

import OrderList from './OrderList'

import { OrderContainer } from './StyleProfile'


export default class Order extends Component {
    render() {
        return (
            <OrderContainer>
                <div className="order_header">
                    <p>租车订单</p>
                    <div>
                        <p>预约成功</p>
                        <p>待付款</p>
                    </div>
                </div>
                <OrderList></OrderList>
                <OrderList></OrderList>

            </OrderContainer>
        )
    }
}
