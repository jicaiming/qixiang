<<<<<<< HEAD:src/pages/category/views/components/TimeBtn/TimeBtn.jsx
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
=======
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
>>>>>>> guangruixiao:src/pages/category/views/components/TimeBtn/TimeBtn.jsx
export default withRouter(TimeBtn)