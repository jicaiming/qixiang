import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { PrimaryContainer } from '../StyledCategory'

export default class PrimaryClassification extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <PrimaryContainer>
        <Link 
          className={this.props.bigKind==="car"?"active":""}
          to="/index/category/car"
        >
          租车
        </Link>
        {/* <div className={this.props.bigKind==="car"?"active":""}>租车</div> */}
        <div className={this.props.bigKind==="flower"?"active":""}>花卉</div>
        <div className={this.props.bigKind==="site"?"active":""}>场地预定</div>
      </PrimaryContainer>
    )
  }
}