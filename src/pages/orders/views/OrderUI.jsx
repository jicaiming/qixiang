import React,{PureComponent}  from 'react'
import {withRouter} from 'react-router-dom'
import {OrderHeader1 ,OrderMain1}from './components/common/common'

import {OrderContainer} from './styledOrder'
<<<<<<< HEAD


=======
>>>>>>> guangruixiao
class OrderUI extends PureComponent{
    render(){
        return (
        <OrderContainer>
            <OrderHeader1></OrderHeader1> 
            <OrderMain1 orderType ={this.props.match.params.type}></OrderMain1>
         </OrderContainer>
        )
    }
}

export default withRouter(OrderUI)
