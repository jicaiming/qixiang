import React, { PureComponent } from 'react'
import {withRouter} from 'react-router-dom'
import { TimeBtnContainer } from './styled'

class TimeBtn extends PureComponent {
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
export default withRouter(TimeBtn)