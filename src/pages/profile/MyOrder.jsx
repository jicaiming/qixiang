import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import Header from 'components/profile/Header'

import WaitPay from './components/WaitPay'  //待付款
import AccountPaid from './components/AccountPaid' //已付款
import Finished from './components/Finished'  //已完成
import AllOrders from './components/AllOrders'  //全部订单

import { MyOrderContainer, NavContainer, MainContainer } from './StyleMyOrder'

export default class MyOrder extends Component {
    render() {
        let { match } = this.props
        return (
            <MyOrderContainer>
                <Header msg="我的订单"></Header>
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
                    <Route path={`${match.path}/waitPay`} component={WaitPay} ></Route>
                    <Route path={`${match.path}/accountPaid`} component={AccountPaid} ></Route>
                    <Route path={`${match.path}/finished`} component={Finished} ></Route>
                    <Route path={`${match.path}/allOrders`} component={AllOrders} ></Route>
                </MainContainer>
            </MyOrderContainer>
        )
    }
}















// import { Tabs, WhiteSpace } from 'antd-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';

// function renderTabBar(props) {
//     return (<Sticky>
//         {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
//     </Sticky>);
// }
// const tabs = [
//     { title: 'First Tab', key: 't1' },
//     { title: 'Second Tab', key: 't2' },
//     { title: 'Third Tab', key: 't3' },
// ];


// export default class MyOrder extends Component {
//     render() {
//         return (
//             <StickyContainer>
//                 <Tabs tabs={tabs}
//                     initialPage={'t2'}
//                     renderTabBar={renderTabBar}
//                 >
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//                         Content of first tab
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//                         Content of second tab
//                     </div>
//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//                         Content of third tab
//                     </div>
//                 </Tabs>
//             </StickyContainer>
//         )
//     }
// }