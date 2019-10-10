import React, { PureComponent } from 'react'

import { SelectContainer, PriceContainer } from '../StyledCategory'

import decreaseImg from 'assets/images/category/decrease.png'
import increaseImg from 'assets/images/category/increase.png'

export default class SelectNum extends PureComponent {
  render() {
    return (
      <SelectContainer>
        <PriceContainer className="price">
          <h4>价格</h4>
          <p>{this.props.price} <i>元</i><span>/天</span></p>
        </PriceContainer>
        <div className="num">
          <h4>数量</h4>
          <p>
            <img src={decreaseImg} alt=""/>
            <em>5</em>
            <img src={increaseImg} alt=""/>
          </p>
        </div>
      </SelectContainer>
    )
  }
}