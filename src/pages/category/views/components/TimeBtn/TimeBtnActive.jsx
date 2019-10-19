import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

import { TimeBtnActiveContainer } from './styled'

class TimeBtnActive extends PureComponent {
  handleClick() {
    let firstKind = this.props.history.location.pathname.split('/')[3]
    if(firstKind === 'car')
    {
      this.props.history.push('/order/car')
    }
    if(firstKind === 'flower')
    {
      this.props.history.push('/order/flower')
    }
  }
  render() {
    return (
      <TimeBtnActiveContainer onClick={()=>{this.handleClick()}}>
        <div>
        下一步 选择租用时间
        </div>
      </TimeBtnActiveContainer>
    )
  }
}

export default withRouter(TimeBtnActive)