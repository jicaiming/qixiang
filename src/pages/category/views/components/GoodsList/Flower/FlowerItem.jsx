import React, { PureComponent } from 'react'
import FlowerContainer from './styled'
import SelectNum from '../SelectNum/SelectNum'
import { MaskConsumer } from '../../../context/MaskContext'

export default class FlowerItem extends PureComponent {
  render() {
    return (
      <MaskConsumer>
        {
          (value) => {
            return (
              <FlowerContainer>
                <div className="pic">
                  <img src={this.props.value.img} alt=""/>
                </div>
                <div className="info">
                  <h2>
                    {this.props.value.name}
                    <i
                      className="right"
                      onClick={() => value.changeStatus(true)}
                    ></i>
                  </h2>
                  <h3>{this.props.value.instructions}</h3>
                  <SelectNum
                    value={this.props.value}
                  ></SelectNum>
                </div>
              </FlowerContainer>
            )
          }
        }
      </MaskConsumer>
    )
  }
}
