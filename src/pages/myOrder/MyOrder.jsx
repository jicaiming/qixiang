import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import _ from 'lodash'

import http from 'utils/xgrhttp'

import Header from 'components/profile/Header'
import { MyOrderContainer, NavContainer, MainContainer } from './StyleMyOrder'

import WaitPay from './components/WaitPay'  //待付款
import AccountPaid from './components/AccountPaid' //已付款
import Finished from './components/Finished'  //已完成
import AllOrders from './components/AllOrders'  //全部订单


export default class MyOrder extends Component {
    state = {
        list: [],
        waitPayList: [],
        accountPaidList: [],
        finishedList: []
    }
    render() {
        let { match } = this.props
        return (
            <MyOrderContainer>
                <Header msg="我的订单" handleClick={this.handleClickback}></Header>
                <NavContainer>
                    <NavLink to={`${match.path}/allOrders`}>
                        <div className={this.props.location.pathname === `${match.path}/allOrders` ? "active" : ""}>
                            全部订单
                        </div>
                    </NavLink>
                    <NavLink to={`${match.path}/waitPay`}>
                        <div className={this.props.location.pathname === `${match.path}/waitPay` ? "active" : ""}>
                            待付款
                        </div>
                    </NavLink>
                    <NavLink to={`${match.path}/accountPaid`}>
                        <div className={this.props.location.pathname === `${match.path}/accountPaid` ? "active" : ""}>
                            已付款
                        </div>
                    </NavLink>
                    <NavLink to={`${match.path}/finished`}>
                        <div className={this.props.location.pathname === `${match.path}/finished` ? "active" : ""}>
                            已结束
                        </div>
                    </NavLink>

                </NavContainer>
                <MainContainer>
                    <Route path={`${match.path}/waitPay`} render={(props) => <WaitPay {...props} list={this.state.waitPayList} />} ></Route>
                    <Route path={`${match.path}/accountPaid`} render={(props) => <AccountPaid {...props} list={this.state.accountPaidList} />} ></Route>
                    <Route path={`${match.path}/finished`} render={(props) => <Finished {...props} list={this.state.finishedList} />} ></Route>
                    <Route path={`${match.path}/allOrders`} render={(props) => <AllOrders {...props} list={this.state.list} />} ></Route>
                </MainContainer>
            </MyOrderContainer>
        )
    }
    handleClickback() {
        //定义函数传给子组件，不能再使用this.props.history;不懂的话解开this打印一遍
        // console.log(this)
        this.history.push('/index/profile')
    }
    async componentDidMount() {
        let result = (await http.post1({
            url: 'http://39.107.252.189:8080/api1/listOrder',
            data: {
                uid: 1
            }
        })).data.orderDTOS

        let waitPayList = _.filter(result, (value, index) => {
            return value.orderMaster.orderStatus === 0
        })
        let accountPaidList = _.filter(result, (value, index) => {
            return value.orderMaster.orderStatus === 1
        })
        let finishedList = _.filter(result, (value, index) => {
            return value.orderMaster.orderStatus === 2
        })

        this.setState({
            list: result,
            waitPayList,
            accountPaidList,
            finishedList
        })
    }
}