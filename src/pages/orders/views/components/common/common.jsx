import React, { PureComponent } from 'react'
import { OrderHeaderStyle, BackIcon, OrderMainStyle } from './styled'
import { withRouter} from 'react-router-dom'

import CarOrder from '../car/CarOrder'
import FlowerOrder from '../flower/FlowerOrder'
import SiteOrder from '../site/SiteOrder'

class OrderHeader extends PureComponent {
    handleClickToBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <OrderHeaderStyle>
                <BackIcon onClick={this.handleClickToBack.bind(this)}></BackIcon>
                <h2>完善订单</h2>
            </OrderHeaderStyle>
        )
    }
}
let OrderHeader1 = withRouter(OrderHeader)
class OrderMain extends PureComponent {
    render() {
        if (this.props.orderType === 'car') {
            return (
                <OrderMainStyle>
                    <CarOrder></CarOrder>
                </OrderMainStyle>
            )
        }
        else if (this.props.orderType === 'flower') {
            return (
                <OrderMainStyle>
                    <FlowerOrder></FlowerOrder>
                </OrderMainStyle>
            )
        }
        else if (this.props.orderType === 'site') {
            return (
                <OrderMainStyle>
                    <SiteOrder></SiteOrder>
                </OrderMainStyle>
            )
        }

    } 
}
let OrderMain1 = withRouter(OrderMain)

export { OrderHeader1, OrderMain1 }