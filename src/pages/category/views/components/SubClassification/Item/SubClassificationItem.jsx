<<<<<<< HEAD
import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

class SubClassificationItem extends PureComponent {
  render() {
    // console.log(this.props)
    return <div
      tag = {this.props.tag}
      className = {
        this.props.tag === this.props.nowTag ? 'active' : ''
      }
    >
      {this.props.item}
    </div>
  }
}

=======
import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

class SubClassificationItem extends PureComponent {
  render() {
    // console.log(this.props)
    return <div
      tag = {this.props.tag}
      className = {
        this.props.tag === this.props.nowTag ? 'active' : ''
      }
    >
      {this.props.item}
    </div>
  }
}

>>>>>>> guangruixiao
export default withRouter(SubClassificationItem)