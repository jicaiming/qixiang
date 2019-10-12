import React, { Component } from 'react'
import BScroll from 'better-scroll'

import {ClassicDetailsContainer} from './StyledClassicDetails'

import Classic3 from 'assets/images/classic_case/classic1.png'

export default class ClassicDetails extends Component {
    state = {
        name:''
    }
    render() {
        return (
            <ClassicDetailsContainer>
                <header>
                    <i onClick={() => this.handleClickback()}>返回</i>
                    <h4>经典案例</h4>
                </header>
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
