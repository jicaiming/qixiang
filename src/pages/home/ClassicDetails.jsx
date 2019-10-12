import React, { Component } from 'react'
import BScroll from 'better-scroll'

import {ClassicDetailsContainer} from './StyledClassicDetails'
import {HomeHeaderContainer} from 'components/StyledHomeHeader.js'


import Classic3 from 'assets/images/classic_case/classic1.png'
import Back from 'assets/images/icon/back.png'


export default class ClassicDetails extends Component {
    state = {
        name:''
    }
    render() {
        return (
            <ClassicDetailsContainer>
                <HomeHeaderContainer>
                    <i onClick={() => this.handleClickback()}><img src={Back} alt=""/> </i>
                    <h4>经典案例</h4>
                </HomeHeaderContainer>
                <div className="classic_wrapper">
                    <div className="classic_son">
                        <img src={Classic3} alt=""/>
                        <button className="customer_service">联系客服</button>
                    </div>
                </div>
            </ClassicDetailsContainer>
        )
    }

    handleClickback(){
        this.props.history.goBack()
    }

    componentDidMount(){
        this.name = this.props.history.location.pathname.split('/')[2]
        // this.setState({
        //     name
        // })
        
        console.log(this.name)
        new BScroll('.classic_wrapper')
    }
}
