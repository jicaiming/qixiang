import React from 'react'

import {OrderHeader1 ,OrderMain1}from './components/common/common'

import {OrderContainer} from './styledOrder'

export default (props)=>{
    // let orderArr = props.location.pathname.split('/')
    // console.log(orderArr)
    // let orderType = orderArr[orderArr.length-1]
    // console.log(orderType)
    return (
        <OrderContainer>
            <OrderHeader1></OrderHeader1> 
            <OrderMain1 orderType = "car"></OrderMain1>
        </OrderContainer>
    )
}
