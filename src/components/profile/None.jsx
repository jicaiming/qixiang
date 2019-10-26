import React, { Component } from 'react'

import { NoneContainer } from './StyleProfile'

import noneOrder from 'images/空省页/没有下单.png'


export default class None extends Component {
    render() {
        return (
            <NoneContainer>
                <img src={noneOrder} alt=""/>
                <p>还没有下单哦～</p>
            </NoneContainer>
        )
    }
}
