import React,{Component} from 'react'

import OrderUI from './OrderUI'
import connect from './connect'

class Order extends Component{
    render(){
        return (
            <OrderUI></OrderUI>
        )
    }
}
export default connect(Order)