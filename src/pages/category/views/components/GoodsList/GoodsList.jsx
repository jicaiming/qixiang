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
      firstKind: 'car',
      secondKind: 1,
      list: []
    }
  }
  componentDidMount() {
    this.setState({
      firstKind: this.props.history.location.pathname.split("/")[3]
    })
    this.props.history.listen(() => {
      let path = this.props.history.location.pathname.split("/")
      this.setState({
        firstKind: path[3]
      })
      if (path.length === 5) {
        this.setState({
          secondKind: path[4]
        })
      } else {
        this.setState({
          secondKind: 1
        })
      }
      // console.log(this.props)
    })
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
    if (this.state.list.length === 0) {
      return false
    }
    let list = this.state.list[this.state.firstKind][this.state.secondKind]
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
