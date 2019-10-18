import React , {PureComponent} from 'react'
import {CarLi} from './styled'

export default class CartItem extends PureComponent{
    render(){
        return (
            <CarLi>
                <h2>丰田 凯美瑞</h2>
                <p className = "carText">
                    <span>2.0自动 </span>
                    |
                    <span> 三厢5座</span></p>
                <p className = "carText">
                    已选
                    <span> 5 </span>
                    辆</p>
                <p className = "carRentData">
                    <span>选择租期</span>
                    <span className ="carRight"></span>
                </p>
            </CarLi>
        )
    }
}
