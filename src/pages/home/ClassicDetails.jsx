import React, { Component } from 'react'
import BScroll from 'better-scroll'

import {ClassicDetailsContainer} from './StyledClassicDetails'
import {HomeHeaderContainer} from 'components/StyledHomeHeader.js'

import Back from 'assets/images/icon/back.png'

export default class ClassicDetails extends Component {
    state = {
        name:''
    }
    render() {
        const data = this.state.name
        return (
            <ClassicDetailsContainer>
                <HomeHeaderContainer>
                    <i onClick={() => this.handleClickback()}><img src={Back} alt=""/> </i>
                    <h4>经典案例</h4>
                </HomeHeaderContainer>
                <div className="classic_wrapper">
                    <div className="classic_son">
                        <img 
                            src={ data ? require(`assets/images/classic_case/classic${data}.png`) : require(`assets/images/classic_case/loading.gif`)} 
                            alt=""
                            
                        />                            
                        <button className="customer_service" onClick={() => this.handleClickCustomerService()}>联系客服</button>
                    </div>
                </div>
            </ClassicDetailsContainer>
        )
    }
    handleClickback(){
        this.props.history.goBack()
    }

    componentDidMount(){
        this.setState({
            name: this.props.history.location.pathname.split('/')[2].split('classic')[1]
        })
        new BScroll('.classic_wrapper')
    }

    handleClickCustomerService(){
        console.log('客服')
    }

}
