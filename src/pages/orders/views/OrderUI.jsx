import React,{PureComponent}  from 'react'
// import React  from 'react'
import {withRouter} from 'react-router-dom'
import {OrderHeader1 ,OrderMain1}from './components/common/common'

import {OrderContainer} from './styledOrder'

// export default (props)=>{
//     // let 
//     console.log(props.match.params.cid)
//     // let orderType = orderArr[orderArr.length-1]
//     // console.log(orderType)
//     return (
//         <OrderContainer>
//             <OrderHeader1></OrderHeader1> 
//             <OrderMain1 orderType = 'car'></OrderMain1>
//         </OrderContainer>
//     )
// }
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
