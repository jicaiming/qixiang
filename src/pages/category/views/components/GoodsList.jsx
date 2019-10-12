import React, { PureComponent } from 'react'

import { ListContainer } from '../StyledCategory'
import CarItem from './CarItem'

let List = [
  {
    name : 1,
    price : 10,
    img : 'http://placehold.it/600x300/00f/ccc.png'
  },
  {
    name : 2,
    price : 20,
    img : 'http://placehold.it/600x300/0f0/ccc.png'
  }
]

export default class GoodsList extends PureComponent {
  render() {
    return (
      <ListContainer>
        {
          List.map((value, index) => (
            <CarItem key={index} value={value}></CarItem>
          ))
        }
      </ListContainer>
    )
  }
}