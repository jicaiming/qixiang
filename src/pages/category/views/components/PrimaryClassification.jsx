import React, { PureComponent } from 'react'

import { fromJS } from 'immutable'

import { withRouter } from 'react-router-dom'

import { PrimaryContainer } from '../StyledCategory'

class PrimaryClassification extends PureComponent {
  render() {
    // console.log(this.props)
    return (
      <PrimaryContainer>
        <div
          ref="car"
          onClick={(e)=>this.handleClick(e, "/car")}
        >租车</div>
        <div
          ref="flower"
          onClick={(e)=>this.handleClick(e, "/flower")}
        >花卉</div>
        <div 
          ref="site"
          onClick={(e)=>this.handleClick(e, "/site")}
        >场地预定</div>
      </PrimaryContainer>
    )
  }
  componentDidMount() {
    // console.log(this.refs)
    // console.log(this.props.bigKind)
    this.refs[this.props.bigKind].className="active"
  }
  componentDidUpdate() {
    // console.log(this.refs)
    const map = fromJS(this.refs)
    map.map((v, k) => {
      return v.className=""
    })
    this.refs[this.props.bigKind].className="active"
  }
  handleClick = function(e, kind){
    // console.log(kind)
    // console.log(this.props)
    console.log(this)
    this.props.history.push(`${this.props.match.path}${kind}`)
  }
}

export default withRouter(PrimaryClassification)