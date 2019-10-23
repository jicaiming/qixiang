import React, { PureComponent } from 'react'

import { withRouter } from 'react-router-dom'

import ListContainer from './styled'
import CarItem from './Car/CarItem'
import FlowerItem from './Flower/FlowerItem'
import SiteItem from './Site/SiteItem'

// let list = [
//   {
//     name : 1,
//     price : 10,
//     img : 'http://placehold.it/600x300/00f/ccc.png'
//   },
//   {
//     name : 2,
//     price : 20,
//     img : 'http://placehold.it/600x300/0f0/ccc.png'
//   }
// ]

class GoodsList extends PureComponent {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    // console.log(this.props)
    fetch('http://localhost:9000/data')
      .then(response => response.json())
      .then(result => {
        this.setState({
          list: result
        })
        // console.log(result)
      })
  }
  render() {
    // console.log(this.props)
    if (this.state.list.length === 0) {
      return false
    }
    let path = this.props.history.location.pathname.split("/")
    let firstKind = path[3]
    let secondKind = path[4] || 1
    let list = this.state.list[firstKind][secondKind]
    switch (this.props.bigKind) {
      case 'car':
        return (
          <ListContainer>
            {
              list.map((value, index) => (
                <CarItem key={index} value={value}></CarItem>
              ))
            }
          </ListContainer>
        )
      case 'flower':
        return (
          <ListContainer>
            {
              list.map((value, index) => (
                <FlowerItem key={index} value={value}></FlowerItem>
              ))
            }
          </ListContainer>
        )
      case 'site':
        return (
          <ListContainer>
            {
              list.map((value, index) => (
                <SiteItem key={index} value={value}></SiteItem>
              ))
            }
          </ListContainer>
        )
      default:
        return false
    }
  }
}

export default withRouter(GoodsList)
