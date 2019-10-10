import React, { Component } from 'react'

import Header from './components/Header'



import { EditContainer } from './StyleEdit'

import goBackIcon from 'images/我的/白色-左选择.png'



export default class Edit extends Component {
    render() {
        return (
            <EditContainer>
                {/* <header>
                    <i onClick={() => this.handleClickback()}>
                        <img src={goBackIcon} alt=""/>
                    </i>
                    <h4>个人设置</h4>
                </header> */}
                <Header></Header>
            </EditContainer>
        )
    }
}