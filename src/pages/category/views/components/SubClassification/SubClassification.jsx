import React, { PureComponent } from 'react'

import { withRouter } from 'react-router-dom'

import SubContainer from './styled'
import SubClassificationItem from './Item/SubClassificationItem'
class SubClassification extends PureComponent {
  constructor() {
    super()
    // console.log(this)
    this.state = {
      secondClass: "1"
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.setState({
      secondClass: this.props.history.location.pathname.split('/')[4]
    })
    this.props.history.listen(() => {
      // console.log(this.props.history.location.pathname.split('/')[4])
      this.setState({
        secondClass: this.props.history.location.pathname.split('/')[4]
      })
    })
  }
  render() {
    // console.log(this.state.secondClass)
    // console.log(this.props.bigKind)
    switch (this.props.bigKind) {
      case 'car': 
        return (
          <SubContainer onClick={this.handleClick}>
            <SubClassificationItem
              tag="1"
              item="商务轿车"
              nowTag={this.state.secondClass}
            ></SubClassificationItem>
            <SubClassificationItem
              tag="2"
              item="7座VIP"
              nowTag={this.state.secondClass}
            >
            </SubClassificationItem>
            <SubClassificationItem
              tag="3"
              item="20座以上商务车"
              nowTag={this.state.secondClass}
            >
            </SubClassificationItem>
          </SubContainer>
        ) 
      case 'flower': 
        return (
          <SubContainer onClick={this.handleClick}>
            <SubClassificationItem
              tag="1"
              item="手捧花"
              nowTag={this.state.secondClass}
            ></SubClassificationItem>
            <SubClassificationItem
              tag="2"
              item="开业花篮"
              nowTag={this.state.secondClass}
            >
            </SubClassificationItem>
            <SubClassificationItem
              tag="3"
              item="时尚桌花"
              nowTag={this.state.secondClass}
            >
            </SubClassificationItem>
          </SubContainer>
        ) 
      case 'site': 
        return (
          <SubContainer onClick={this.handleClick}>
            <SubClassificationItem
              tag="1"
              item="200以下"
              nowTag={this.state.secondClass}
            ></SubClassificationItem>
            <SubClassificationItem
              tag="2"
              item="200至700人"
              nowTag={this.state.secondClass}
            >
            </SubClassificationItem>
            <SubClassificationItem
              tag="3"
              item="1000人以上"
              nowTag={this.state.secondClass}
            >
            </SubClassificationItem>
          </SubContainer>
        ) 
      default:
        return false
    }
  }
  handleClick = function(e) {
    let tag = e.target.getAttribute('tag')
    if (!tag) {
      return false
    } else {
      this.setState({
        secondClass: tag
      }, () => {
        // console.log(e)
        // console.log(`${this.props.match.path}/${this.props.bigKind}/${this.state.secondClass}`)
        this.props.history.push(`${this.props.match.path}/${this.props.bigKind}/${this.state.secondClass}`)
      })
    }
  }
}

export default withRouter(SubClassification)
