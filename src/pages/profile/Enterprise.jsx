import React, { Component } from 'react'

import Header from 'components/profile/Header'
import {EnterpriseContainer} from './StyleEnterprise'

import logo from 'images/空省页/企享logo.png'

export default class Enterprise extends Component {
    render() {
        return (
            <EnterpriseContainer>
                <Header msg="关于企业" handleClick={this.handleClickback}></Header>
                <main>
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    <p>企享</p>
                    <div>
                        <p>
                            企享是一个专门为企业提供策划服务的一个平台。企业人员可以直接在我们的平台进行咨询预订，我们不仅可以为企业提供各类完整的活动策划场景布置。也有单品出租项目解决企业活动的各类需求。
                        </p>
                    </div>
                </main>
            </EnterpriseContainer>
        )
    }
    handleClickback() {
        //定义函数传给子组件，不能再使用this.props.history;不懂的话解开this打印一遍
        // console.log(this)
        this.history.goBack()
    }
}
