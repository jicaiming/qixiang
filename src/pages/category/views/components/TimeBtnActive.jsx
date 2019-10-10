import React, { PureComponent } from 'react'

import { TimeBtnActiveContainer } from '../StyledCategory'

export default class TimeBtnActive extends PureComponent {
  render() {
    return (
      <TimeBtnActiveContainer>
        <div>
        下一步 选择租用时间
        </div>
      </TimeBtnActiveContainer>
    )
  }
}