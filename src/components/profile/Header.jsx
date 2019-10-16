import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


import { HeaderContainer } from './StyleProfile'
import goBackIcon from 'images/我的/白色-左选择.png'


class Header extends Component {
    static defaultProps = {
        msg: ''
    }
    render() {
        return (
            <HeaderContainer>
                <i onClick={() => this.handleClickback()}>
                    <img src={goBackIcon} alt="" />
                </i>
                <h4>{this.props.msg}</h4>
            </HeaderContainer>
        )
    }
    handleClickback() {
        // this.props.history.goBack()
        this.props.history.push('/index/profile')
    }
}

export default withRouter(Header)