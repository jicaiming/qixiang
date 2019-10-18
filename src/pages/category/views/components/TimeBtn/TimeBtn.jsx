import React, { PureComponent } from 'react'
import {withRouter} from 'react-router-dom'
import { TimeBtnContainer } from './styled'

class TimeBtn extends PureComponent {
  handleClick(props){
    props.history.push('/order')
  }
  render() {
    return (
      <TimeBtnContainer>
        <div onClick = {this.handleClick.bind(this,this.props)}>
        请先选择车型和数量
        </div>
      </TimeBtnContainer>
    )
  }
}
export default withRouter(TimeBtn)