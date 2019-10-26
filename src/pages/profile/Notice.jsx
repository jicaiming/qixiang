import React, { Component } from 'react'

import Header from 'components/profile/Header'
import NoticeItem from 'components/profile/NoticeItem'
import {NoticeContainer} from './StyleNotice'

export default class Notice extends Component {
    render() {
        return (
            <NoticeContainer>
                <Header msg="公告" handleClick={this.handleClickback}></Header>
                <main>
                    <NoticeItem>
                    </NoticeItem>
                    <div className="backdrop"></div>
                </main>
            </NoticeContainer>
        )
    }
    handleClickback() {
        //定义函数传给子组件，不能再使用this.props.history;不懂的话解开this打印一遍
        // console.log(this)
        this.history.goBack()
    }
}
