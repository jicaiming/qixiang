import React, { PureComponent } from 'react'

import { SubContainer } from '../StyledCategory'

export default class SubClassification extends PureComponent {
  render() {
    return (
      <SubContainer>
        <div className="active">商务轿车</div>
        <div>7座VIP</div>
        <div>20座以上商务车</div>
      </SubContainer>
    )
  }
}