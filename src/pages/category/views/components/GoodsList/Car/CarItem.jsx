import React, { PureComponent } from 'react'

import CarContainer from './styled'
import SelectNum from '../SelectNum/SelectNum'

export default class CarItem extends PureComponent {
  render() {
    return (
      <CarContainer>
        <div className="pic">
          <img src={this.props.value.img} alt=""/>
        </div>
        <div className="info">
          <h2>{this.props.value.name}</h2>
          <h3>2.0自动 | 三厢5座</h3>
          <SelectNum
            price={this.props.value.price}
            id={this.props.value.id}  
          ></SelectNum>
        </div>
      </CarContainer>
    )
  }
}
