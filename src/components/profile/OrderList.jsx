import React, { Component } from 'react'

import { OrderListContainer } from './StyleProfile'


export default class OrderList extends Component {
    render() {
        return (
            <OrderListContainer>
                <div className="img_container">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3319057295,1725170488&fm=26&gp=0.jpg" alt=""/>
                </div>
                <div className="detail_container">
                    <div>
                        <p>丰田 凯美瑞</p>
                        <p>2.0自动 | 三厢5座备份</p>
                        <p>10月28日 至 11月2日</p>
                    </div>
                    <div>
                        <p><span>300</span>元</p>
                        <p>×5</p>
                        <p>×7</p>
                    </div>
                </div>
            </OrderListContainer>
        )
    }
    componentDidMount(){
        // console.log(this)
    }
}
