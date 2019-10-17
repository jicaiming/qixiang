import React, { Component } from 'react'

import Header from 'components/profile/Header'
import NoticeItem from 'components/profile/NoticeItem'
import {NoticeContainer} from './StyleNotice'

export default class Notice extends Component {
    render() {
        return (
            <NoticeContainer>
                <Header msg="公告"></Header>
                <main>
                    <NoticeItem>
                    </NoticeItem>
                    <div className="backdrop"></div>
                </main>
            </NoticeContainer>
        )
    }
}
