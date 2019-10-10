import React, { Component } from 'react'

import { ProfileMessage, ProfileOrder, ProfileServe, ListItem } from './StyleProfile.js'
import userPhoto from 'images/我的/我的-头像.png'
import edit from 'images/我的/我的-编辑icon.png'

import waitPay from 'images/我的/待付款icon.png'
import accountPaid from 'images/我的/已付款.png'
import finished from 'images/我的/已结束.png'
import allOrders from 'images/我的/全部订单.png'





export default class Profile extends Component {
    render() {
        return (
            <>
                <ProfileMessage>
                    <div>
                        <div>
                            <img src={userPhoto} alt="" />
                        </div>
                        <div>
                            <img src={edit} alt="" />
                            <div>
                                <p>guangruixiao</p>
                                <p>请添加活动区域</p>
                                <p>请添加公司信息</p>
                            </div>
                        </div>
                    </div>
                </ProfileMessage>
                <ProfileOrder>
                    <h4>我的订单</h4>
                    <div>
                        <div>
                            <img src={waitPay} alt="" />
                            <p>待付款</p>
                        </div>
                        <div>
                            <img src={accountPaid} alt="" />
                            <p>已付款</p>
                        </div>
                        <div>
                            <img src={finished} alt="" />
                            <p>已结束</p>
                        </div>
                        <div>
                            <img src={allOrders} alt="" />
                            <p>全部订单</p>
                        </div>
                        {/* <ul>
                            <li>
                                
                            </li>
                            <li>haha</li>
                            <li>sssssssss</li>
                            <li>xc</li>
                        </ul> */}
                    </div>
                </ProfileOrder>
                <ProfileServe>
                    <h4>我的服务</h4>
                    <div>
                        <ListItem><p>关于企业</p></ListItem>
                        <ListItem><p>公告</p></ListItem>
                        <ListItem><p>设置</p></ListItem>
                    </div>
                </ProfileServe>
            </>
        )
    }
}
