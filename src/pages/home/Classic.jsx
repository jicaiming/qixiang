import React, { Component } from 'react'

import {ClassicContainer} from './StyledClassic'
import {HomeHeaderContainer} from 'components/StyledHomeHeader.js'

import HomeClassic1 from 'assets/images/classic_case/home_classic1.png'
import HomeClassic2 from 'assets/images/classic_case/home_classic2.png'
import HomeClassic3 from 'assets/images/classic_case/home_classic3.png'
import Back from 'assets/images/icon/back.png'

class Classic extends Component {
    state = {
        name:''
    }

    render() {
        return (
            <ClassicContainer>
                <HomeHeaderContainer>
                    <i onClick={() => this.handleClickback()}><img src={Back} alt=""/> </i>
                    <h4>经典案例</h4>
                </HomeHeaderContainer>
                <section className="classic_container">
                    <ul>
                        <li onClick={() => this.handleClickClassic('classic1')} ><div><img src={HomeClassic1} alt=""/></div></li>
                        <li onClick={() => this.handleClickClassic('classic2')} ><div><img src={HomeClassic2} alt=""/></div></li>
                        <li onClick={() => this.handleClickClassic('classic3')} ><div><img src={HomeClassic3} alt=""/></div></li>
                    </ul>
                </section>
            </ClassicContainer>
        )
    }

    handleClickback(){
        this.props.history.goBack()
    }

    handleClickClassic(name){
        this.setState({
            name:name
        })
        this.props.history.push(`/classic/${name}`)
    }
}

export default Classic
