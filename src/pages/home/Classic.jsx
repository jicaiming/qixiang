import React, { Component } from 'react'

import {ClassicContainer} from './StyledClassic'

export default class Classic extends Component {
    render() {
        return (
            <ClassicContainer>
                <header>
                    <i onClick={() => this.handleClickback()}>返回</i>
                    <h4>经典案例</h4>
                </header>
                <section className="classic_container">
                    <ul>
                        <li><div><img src="" alt=""/></div></li>
                        <li><div><img src="" alt=""/></div></li>
                        <li><div><img src="" alt=""/></div></li>
                    </ul>
                </section>
            </ClassicContainer>
        )
    }

    handleClickback(){
        this.props.history.goBack()
    }
}
