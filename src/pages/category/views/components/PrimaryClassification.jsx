import React, { PureComponent } from 'react'

import { PrimaryContainer } from '../StyledCategory'

export default class PrimaryClassification extends PureComponent {
  render() {
    return (
      <PrimaryContainer>
        <div className="active">租车</div>
        <div>花卉</div>
        <div>场地预定</div>
      </PrimaryContainer>
    )
  }
}