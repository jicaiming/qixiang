import React, { PureComponent } from 'react'

import { ItemContainer } from '../StyledCategory'

export default class GoodsItem extends PureComponent {
  render() {
    return (
      <ItemContainer>
        <div className="pic">
          <img src="http://placehold.it/600x300/00f/ccc.png" alt=""/>
        </div>
        <div className="info">
          <h2>丰田 凯美瑞</h2>
          <h3>2.0自动 | 三厢5座</h3>
          <div>
            <div>
              <h4>价格</h4>
              <p>300 <i>元</i><span>/天</span></p>
            </div>
            <div>
              <h4>数量</h4>
              <p>
                <img src="http://placehold.it/21x21.png" alt=""/>
                <em>5</em>
                <img src="http://placehold.it/21x21.png" alt=""/>
              </p>
            </div>
          </div>
        </div>
      </ItemContainer>
    )
  }
}