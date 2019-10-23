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
          <h3>{this.props.value.instructions.split(' ')[0]} | {this.props.value.instructions.split(' ')[1]}</h3>
          <SelectNum
            value={this.props.value}
          ></SelectNum>
        </div>
      </CarContainer>
    )
  }
}
