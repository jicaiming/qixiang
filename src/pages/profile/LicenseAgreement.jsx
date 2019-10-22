import React, { Component } from 'react'

import Header from 'components/profile/Header'

import {LicenseAgreementContainer} from './StyleLicenseAgreement'

export default class LicenseAgreement extends Component {
    render() {
        return (
            <LicenseAgreementContainer>
                <Header msg="用户许可使用协议" handleClick={this.handleClickback}></Header>
                <main>
                    <div>
                        欢迎阅读 “金库网”用户服务协议(下简称“本协议”)。用户使用“金库网”相关服务之前，务必审慎阅读、充分理解本协议各条款内容，特别是用户承诺条款，以及免除或者限制责任的条款，用户应重点阅读。用户按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序（使用手机号码注册的用户，在输入验证码并成功登陆后即视为完成全部注册程序）后，即表示用户已充分阅读、理解并接受本协议的全部内容，并与我公司达成协议。用户承诺接受并遵守本协议的约定，用户将不得以未阅读本协议的内容等理由，主张本协议无效，或要求撤销本协议。
                    </div>
                </main>
            </LicenseAgreementContainer>
        )
    }
    handleClickback() {
        //定义函数传给子组件，不能再使用this.props.history;不懂的话解开this打印一遍
        // console.log(this)
        this.history.goBack()
    }
}

