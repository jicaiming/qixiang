import React, { Component } from 'react'

import OrderList from './OrderList'

import { OrderContainer, MyButton } from './StyleProfile'


export default class Order extends Component {

    render() {
        const list = this.props.list
        return (
            < OrderContainer borderColor='#37C2BC' >
                <div className="order_header">
                    {(() => {
                        switch (list.details[0].type) {
                            case '车':
                                return (
                                    <p>租车订单</p>
                                );
                                break;
                            case '花':
                                return (
                                    <p>花卉订单</p>
                                );
                                break;
                            case '场地':
                                return (
                                    <p>场地预定订单</p>
                                );
                                break;
                            default:
                                return (
                                    <p>订单异常</p>
                                );
                                break;
                        }
                    })()}
                    {(() => {
                        switch (list.orderMaster.orderStatus) {
                            case 0:
                                return (
                                    <div>
                                        <p>预约成功</p>
                                        <p>待付款</p>
                                    </div>
                                );
                                break;
                            case 1:
                                return (
                                    <div>
                                        <p>已付款</p>
                                    </div>
                                );
                                break;
                            case 2:
                                return (
                                    <div>
                                        <p>预约成功</p>
                                        <p>待付款</p>
                                    </div>
                                );
                                break;
                            default:
                                return (
                                    <div>
                                        <p>订单异常</p>
                                    </div>
                                );
                                break;
                        }
                    })()}
                </div>
                <OrderList list={list.details}></OrderList>
                <div className="service_charge">
                    <span>服务费：</span>
                    <p><span>{list.orderMaster.isHasServiceFee}</span><span>元</span></p>
                </div>
                <div className="all_charge">
                    <span>费用合计：</span>
                    <p><span>{list.orderMaster.orderAmount}</span><span>元</span></p>
                </div>
                <div className="btn_container">
                    {list.orderMaster.orderStatus == 0 ? <MyButton>取消订单</MyButton> : ''}
                    <MyButton color='#37C2BC'>联系客服</MyButton>
                </div>
            </OrderContainer >
        )
    }
}
