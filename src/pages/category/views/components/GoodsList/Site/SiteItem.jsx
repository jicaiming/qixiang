import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import SiteContainer from './styled'

class SiteItem extends PureComponent {
  handleClick = function(e, value){
    this.props.history.push("/category/site/detail", {
      value
    })
  }
  render() {
    // console.log(this.props)
    return (
      <SiteContainer
        onClick={(e)=>this.handleClick(e, this.props.value)}
      >
        <div className="pic">
          <img src={this.props.value.img} alt=""/>
        </div>
        <div className="info">
          <h2>{this.props.value.name}</h2>
          <h2>{this.props.value.address}</h2>
          <h3>{this.props.value.instructions.split(' ')[0]} | {this.props.value.instructions.split(' ')[1]}</h3>
          <div className="price">
            价格
            <span>{this.props.value.price} </span>
            <i>元</i>
            /天
          </div>
        </div>
      </SiteContainer>
    )
  }
}

export default withRouter(SiteItem)