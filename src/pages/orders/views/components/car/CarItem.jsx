import React , {PureComponent} from 'react'

import {withRouter} from 'react-router-dom'
import {CarLi} from './styled'

class CartItem extends PureComponent{
    handleClickToTimer(){
        this.props.history.push('/timer')
    }
    render(){
        return (
            <CarLi>
                <h2>{this.props.value.name}</h2>
                <p className = "carText">
                    <span>2.0自动 </span>
                    |
                    <span> 三厢5座</span></p>
                <p className = "carText">
                    已选
                    <span> {this.props.value.count} </span>
                    辆</p>
                <p className = "carRentData">
                    <span>选择租期</span>
                    <span className ="carRight" onClick={this.handleClickToTimer.bind(this)}></span>
                </p>
            </CarLi>
        )
    }
}

export default withRouter(CartItem)