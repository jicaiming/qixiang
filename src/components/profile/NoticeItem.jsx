import React, { Component } from 'react'

import { NoticeItemContainer } from './StyleProfile'

import notice from 'images/我的/tongzhigonggao.png'

export default class NoticeItem extends Component {
    render() {
        return (
            <NoticeItemContainer>
               <div>
                    <img src={notice} alt=""/>
                    <div>
                        <p>最新公告</p>
                        <p>新品车辆出租，单天起租，限时优惠。</p>
                    </div>
               </div>
                <p>2019-9-19</p>
            </NoticeItemContainer>
        )
    }
}
