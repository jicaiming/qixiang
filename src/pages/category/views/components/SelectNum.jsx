import React, { PureComponent } from 'react'

import { SelectContainer, PriceContainer } from '../StyledCategory'

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
            <img src="http://placehold.it/21x21.png" alt=""/>
            <em>5</em>
            <img src="http://placehold.it/21x21.png" alt=""/>
          </p>
        </div>
      </SelectContainer>
    )
  }
}