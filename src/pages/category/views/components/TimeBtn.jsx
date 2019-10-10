import React, { PureComponent } from 'react'

import { TimeBtnContainer } from '../StyledCategory'

export default class TimeBtn extends PureComponent {
  render() {
    return (
      <TimeBtnContainer>
        <div>
        请先选择车型和数量
        </div>
      </TimeBtnContainer>
    )
  }
}