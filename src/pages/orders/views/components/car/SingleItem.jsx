import React ,{PureComponent} from 'react'
import connect from '../../connect'

import {SingleItemContainer} from './styled'

class SingleItem extends PureComponent{
   
    
    render(){
        var dayCount = 0
        var timeList1 = this.props.timeList
        
        timeList1.forEach((value,index)=>{
            if(value.id === this.props.value.id){
                dayCount = value.dayCount 
            }
        })
        var singleCost = this.props.value.price*this.props.value.count*dayCount
        
        return(
            <SingleItemContainer>
                <span>{this.props.value.name}</span>
                <p className ="carContent2"><span>{this.props.value.price}</span>x<span>{this.props.value.count}</span>x<span>{dayCount}</span></p>
                <p className ="carContent3"><span>{singleCost}</span>元</p>
            </SingleItemContainer>
        )
    }
}
export default connect(SingleItem)