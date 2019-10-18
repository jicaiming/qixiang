import React ,{PureComponent} from 'react'
import {SingleOrder} from './styled'

import BScroll from 'better-scroll'

import SingleItem from './SingleItem'

export default class CarSingleOrder extends PureComponent{
    componentDidMount(){
        let wrapper1 = document.querySelector('.singleWrapper')
        let scroll  = new BScroll(wrapper1,{
            scrollY:true,
            mouseWheel:true
        })
        console.log(scroll)
    }
    render(){
        return (
            <SingleOrder className = "singleWrapper">
                <div>
                    <SingleItem></SingleItem>
                    <SingleItem></SingleItem>
                    <SingleItem></SingleItem>
                    <SingleItem></SingleItem>
                    <SingleItem></SingleItem>
                    <SingleItem></SingleItem>
                    <SingleItem></SingleItem>
                    <SingleItem></SingleItem>   
                </div>
                
            </SingleOrder>
        )
    }
}

