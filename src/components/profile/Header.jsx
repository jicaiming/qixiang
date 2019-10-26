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
                <i onClick={()=>this.props.handleClick()}>
                    <img src={goBackIcon} alt="" />
                </i>
                <h4>{this.props.msg}</h4>
            </HeaderContainer>
        )
    }
}
export default withRouter(Header)