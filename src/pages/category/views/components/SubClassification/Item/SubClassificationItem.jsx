import React, { PureComponent } from 'react'

export default class SubClassificationItem extends PureComponent {
  render() {
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