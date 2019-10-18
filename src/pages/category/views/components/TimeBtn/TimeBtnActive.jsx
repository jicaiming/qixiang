import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

import { TimeBtnActiveContainer } from './styled'

class TimeBtnActive extends PureComponent {
  handleClick() {
    // console.log(this.props.history.location.pathname.split('/')[3])
    console.log(this.props)
    let firstKind = this.props.history.location.pathname.split('/')[3]
    this.props.history.push('/order',{
      kind: firstKind
    })
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