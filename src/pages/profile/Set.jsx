import React, { Component} from 'react'

import Header from 'components/profile/Header'
import MyButton from 'components/profile/Button'
import { SetContainer, SetItem, SetItemHaveBorder  } from './StyleSet'

import more from 'images/我的/更多.png'

import { List, Switch } from 'antd-mobile';

export default class Set extends Component {
    state = {
        checked: true,
    };
    render() {
        return (
            <SetContainer>
                <Header msg="设置" handleClick={this.handleClickback}></Header>
                <main>
                    <List.Item
                        extra={<Switch
                            checked={this.state.checked}
                            onChange={()=>this.handleClick()}
                        />}
                    >消息设置</List.Item>
                    <div className="backdrop"></div>
                    <SetItemHaveBorder>
                        <p>找回密码</p>
                        <img src={more} alt="" />
                    </SetItemHaveBorder>
                    <SetItemHaveBorder>
                        <p>修改密码</p>
                        <img src={more} alt="" />
                    </SetItemHaveBorder>
                    <SetItemHaveBorder>
                        <p>版本信息</p>
                        <p>3.0</p>
                    </SetItemHaveBorder>
                    <SetItem onClick={()=>this.handleClickTo()}>
                        <p>用户许可使用协议</p>
                        <img src={more} alt="" />
                    </SetItem>
                    <div className="backdrop"></div>
                    <MyButton msg='退出登录' onClick={this.onLogoOut}></MyButton>
                </main>
            </SetContainer>
        )
    }
    handleClickback() {
        //定义函数传给子组件，不能再使用this.props.history;不懂的话解开this打印一遍
        // console.log(this)
        this.history.goBack()
    }
    handleClick() {
        this.setState({
            checked: !this.state.checked,
        });
    }
    handleClickTo(){
        this.props.history.push('/license')
    }
    onLogoOut(){
        console.log('退出登录')
    }
}
