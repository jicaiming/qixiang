import React, { Component } from 'react'

import http from 'utils/xgrhttp'

import { ProfileMessage, ProfileOrder, ProfileServe, ListItem, ListItemHaveBorder } from './StyleProfile.js'
import userPhoto from 'images/我的/我的-头像.png'
import edit from 'images/我的/我的-编辑icon.png'

import waitPay from 'images/我的/待付款icon.png'
import accountPaid from 'images/我的/已付款.png'
import finished from 'images/我的/已结束.png'
import allOrders from 'images/我的/全部订单.png'
import enterprise from 'images/我的/guanyuqiye.png'
import notice from 'images/我的/tongzhigonggao.png'
import set from 'images/我的/shezhi.png'
import more from 'images/我的/更多.png'


export default class Profile extends Component {
    state = {
        list: []
    }
    render() {
        const list = this.state.list
        return (
            <>
                <ProfileMessage>
                    <div>
                        <div>
                            <img src={list.pic ? list.pic : userPhoto} alt="" />
                        </div>
                        <div>
                            <img src={edit} alt="" onClick={() => this.handleClickTo('edit')} />
                            <div>
                                <p>{list.username}</p>
                                <p>{list.address ? list.address : '请添加活动区域'}</p>
                                <p>{list.company ? list.company : '请添加公司信息'}</p>
                            </div>
                        </div>
                    </div>
                </ProfileMessage>
                <ProfileOrder>
                    <h4>我的订单</h4>
                    <div>
                        <div onClick={() => this.handleClickToMyOrder('waitPay')}>
                            <img src={waitPay} alt="" />
                            <p>待付款</p>
                        </div>
                        <div onClick={() => this.handleClickToMyOrder('accountPaid')}>
                            <img src={accountPaid} alt="" />
                            <p>已付款</p>
                        </div>
                        <div onClick={() => this.handleClickToMyOrder('finished')}>
                            <img src={finished} alt="" />
                            <p>已结束</p>
                        </div>
                        <div onClick={() => this.handleClickToMyOrder('allOrders')}>
                            <img src={allOrders} alt="" />
                            <p>全部订单</p>
                        </div>
                    </div>
                </ProfileOrder>
                <ProfileServe>
                    <h4>我的服务</h4>
                    <div>
                        <ListItem onClick={() => this.handleClickTo('enterprise')}>
                            <img src={enterprise} alt="" />
                            <p>关于企业</p>
                            <img src={more} alt="" />
                        </ListItem>
                        <ListItemHaveBorder onClick={() => this.handleClickTo('notice')}>
                            <img src={notice} alt="" />
                            <p>公告</p>
                            <img src={more} alt="" />
                        </ListItemHaveBorder>
                        <ListItem onClick={() => this.handleClickTo('set')}>
                            <img src={set} alt="" />
                            <p>设置</p>
                            <img src={more} alt="" />
                        </ListItem>
                    </div>
                </ProfileServe>
            </>
        )
    }
    async componentDidMount() {
        let result = (await http.post1({
            url: '/api/findUserMsg',
            data: {
                uid: 1
            }
        })).data
        this.setState({
            list: result
        }, () => {
            console.log(this.state.list)
        })
    }
    handleClickTo(r) {
        this.props.history.push(`/${r}`)
    }
    handleClickToMyOrder(i) {
        this.props.history.push(`/myorder/${i}`)
        // this.props.history.push(`/myorder`)    
    }
}

