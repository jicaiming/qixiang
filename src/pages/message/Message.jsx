import React, { Component } from 'react'
import {MessageContainer} from './StyledMessage'
import {HomeHeaderContainer} from 'components/StyledHomeHeader.js'

export default class Message extends Component {
    render() {
        return (
            <MessageContainer>
                <HomeHeaderContainer>
                    <h4>消息中心</h4>
                </HomeHeaderContainer>
            </MessageContainer>
        )
    }
}
