import React , {PureComponent} from 'react'
import connect from '../../connect'

import {withRouter} from 'react-router-dom'
import {CarLi,ChooseData,ShowData} from './styled'

class CartItem extends PureComponent{
    handleClickToTimer(){
        let id = this.props.value.id
        this.props.history.push('/timer',{id:id})
    }
    render(){
        let hasTime = false
        let startTime = 0 
        let endTime = 0 
        let sTime = ''
        let eTime = ''
        let timeList = this.props.timeList
        let sY = 0 
        let sM = 0 
        let sD = 0 
        let sDay = 0
        let eY = 0 
        let eM = 0 
        let eD = 0 
        let eDay = 0
        let dayCount = 0
        timeList.forEach((value,index)=>{
            if(value.id === this.props.value.id){
                dayCount = value.dayCount
                startTime = value.sTime
                sTime = new Date(startTime)
                sY = sTime.getFullYear()
                sM = sTime.getMonth()+1
                sD = sTime.getDate()
                sDay = sTime.getDay()
                endTime = value.eTime
                eTime = new Date(endTime)
                eY = eTime.getFullYear()
                eM = eTime.getMonth()+1
                eD = eTime.getDate()
                eDay = eTime.getDay()
                
            }
            if(value.dayCount !== 0&&value.id === this.props.value.id){
                hasTime = true
            }
        })


        return (
            <CarLi>
                <h2>{this.props.value.name}</h2>
                <p className = "carText">
                    <span>{this.props.value.instructions.split(' ')[0]} </span>
                    |
                    <span>   {this.props.value.instructions.split(' ')[1]}</span>
                </p>
                <p className = "carText">
                    已选
                    <span> {this.props.value.count} </span>
                    辆</p>
                <p className = "carRentData">
                {
                    !hasTime
                    ? <ChooseData>选择租期</ChooseData>
                    : <ShowData>
                        {sY}年{sM}月{sD}日(周{sDay}) 至 {eY}年{eM}月{eD}日(周{eDay})       共计{dayCount}天      
                    </ShowData>
                }
                    
                    <span className ="carRight" onClick={this.handleClickToTimer.bind(this)}></span>
                </p>
            </CarLi>
        )
    }
}

// export default withRouter(CartItem)
export default connect(withRouter(CartItem))
