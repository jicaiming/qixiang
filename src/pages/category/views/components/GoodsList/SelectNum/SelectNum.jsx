import React, { PureComponent } from 'react'

import { SelectContainer, PriceContainer } from './styled'

import decreaseImg from 'assets/images/category/decrease.png'
import increaseImg from 'assets/images/category/increase.png'
import connect from '../../../connect'

class SelectNum extends PureComponent {
  handleClickI(id){
    // console.log(this.props)
    this.props.increaseNum(id)
    // console.log(this.props)
  }
  handleClickD(id){
    this.props.decreaseNum(id)
  }
  render() {
    // console.log(this.props)
    let num = 0
    if(this.props.buyList.length !== 0) {
      this.props.buyList.map((v, i)=>{
        if (v.id === this.props.id) {
          num = v.count
        }
        return num
      })
    } else {
      num = 0
    }
    return (
      <SelectContainer>
        <PriceContainer className="price">
          <h4>价格</h4>
          <p>{this.props.price} <i>元</i><span>/天</span></p>
        </PriceContainer>
        <div className="num">
          <h4>数量</h4>
          <p>
            <img src={decreaseImg} alt="" onClick={()=>this.handleClickD(this.props.id)}/>
            <em>{num}</em>
            <img src={increaseImg} alt="" onClick={()=>this.handleClickI(this.props.id)}/>
          </p>
        </div>
      </SelectContainer>
    )
  }
}

export default connect(SelectNum)
