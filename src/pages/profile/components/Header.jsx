import React, { Component } from 'react'

import { HeaderContainer } from '../StyleEdit'
import goBackIcon from 'images/我的/白色-左选择.png'


export default class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <i onClick={() => this.handleClickback()}>
                    <img src={goBackIcon} alt="" />
                </i>
                <h4>个人设置</h4>
            </HeaderContainer>
        )
    }
}
