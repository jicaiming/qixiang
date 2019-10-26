import React ,{PureComponent} from 'react'
import {SingleOrder} from './styled'

import BScroll from 'better-scroll'

import SingleItem from './SingleItem'
import connect from '../../connect'

class CarSingleOrder extends PureComponent{
    componentDidMount(){
        let wrapper1 = document.querySelector('.singleWrapper')
        new BScroll(wrapper1,{
            scrollY:true,
            click:true,
            mouseWheel:true
        })
    }
    render(){
        let {buyList} = this.props.allData
        return (
            <SingleOrder className = "singleWrapper">
                <div>
                    {
                        buyList.map((value,index)=>(
                            <SingleItem key={index} value={value}></SingleItem>
                        ))
                    }
                </div>
                
            </SingleOrder>
        )
    }
}
export default connect(CarSingleOrder)