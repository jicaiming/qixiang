import React, { Component } from 'react'

import { OrderListContainer } from './StyleProfile'


export default class OrderList extends Component {
    render() {
        return (
            this.props.list.map((value, index) => {
                return (
                    <OrderListContainer key={value.detailId}>
                        <div className="img_container">
                            <img src={value.categoryImageurl} alt="" />
                        </div>
                        <div className="detail_container">
                            <div>
                                <p>{value.categoryName}</p>
                                <p>{value.instructions}</p>
                                <p>{value.createDate ? value.createDate.slice(5, 7) : ''}月{value.createDate ? value.createDate.slice(8, 10) : ''}日 至
                                {value.createDate ? value.createDate.slice(5, 7) : ''}月{value.createDate ? value.createDate.slice(8, 10) : ''}日</p>
                            </div>
                            <div>
                                <p><span>{value.categoryPrice}</span>元</p>
                                <p>×{value.categoryQuantity}</p>
                                <p>×{value.dayCount}</p>
                            </div>
                        </div>
                    </OrderListContainer>
                )
            })

        )
    }
}
