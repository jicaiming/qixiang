import React, { Component } from 'react'

import OrderList from './OrderList'

import { OrderContainer, MyButton } from './StyleProfile'


export default class Order extends Component {
    render() {
        return (
            <OrderContainer borderColor='#37C2BC'>
                <div className="order_header">
                    <p>租车订单</p>
                    <div>
                        <p>预约成功</p>
                        <p>待付款</p>
                    </div>
                </div>
                <OrderList list={this.props.list}></OrderList>
                <div className="service_charge">
                    <span>服务费：</span>
                    <p><span>350</span><span>元</span></p>
                </div>
                <div className="all_charge">
                    <span>费用合计：</span>
                    <p><span>12450</span><span>元</span></p>
                </div>
                <div className="btn_container">
                    <MyButton>取消订单</MyButton>
                    <MyButton color='#37C2BC'>联系客服</MyButton>
                </div>
            </OrderContainer>
        )
    }
    componentDidMount(){
        // console.log(this)
    }
}
