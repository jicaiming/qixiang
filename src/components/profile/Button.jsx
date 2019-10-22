import React, { Component } from 'react'

import { Button } from 'antd-mobile';

import {ButtonContainer} from './StyleProfile'

export default class MyButton extends Component {
    render() {
        return (
            <ButtonContainer>
                <Button onClick={this.props.onClick} >{this.props.msg}</Button>
            </ButtonContainer>
        )
    }
}
