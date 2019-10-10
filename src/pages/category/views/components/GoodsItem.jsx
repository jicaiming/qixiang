import React, { PureComponent } from 'react'

import { ItemContainer } from '../StyledCategory'
import SelectNum from './SelectNum'

export default class GoodsItem extends PureComponent {
  render() {
    return (
      <ItemContainer>
        <div className="pic">
          <img src={this.props.value.img} alt=""/>
        </div>
        <div className="info">
          <h2>丰田 凯美瑞{this.props.value.name}</h2>
          <h3>2.0自动 | 三厢5座</h3>
          <SelectNum price={this.props.value.price}></SelectNum>
        </div>
      </ItemContainer>
    )
  }
}