import React, { PureComponent } from 'react'

import { ListContainer } from '../StyledCategory'
import GoodsItem from './GoodsItem'

let List = [
  {
    name : 1,
    price : 10
  },
  {
    name : 2,
    price : 20
  }
]

export default class GoodsList extends PureComponent {
  render() {
    return (
      <ListContainer>
        {
          List.map((value, index) => (
            <GoodsItem key={index} value={value}></GoodsItem>
          ))
        }
      </ListContainer>
    )
  }
}