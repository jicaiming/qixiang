import React, { PureComponent } from 'react'
import MaskContainer from './styled'
import { MaskConsumer } from '../../context/MaskContext'

class Mask extends PureComponent {
  render() {
    return (
      <MaskConsumer>
        {
          (value) => {
            // console.log(value)
            function bindClick(e) {
              // console.log(value)
              // console.log(e.target.className.indexOf('container'))
              if (e.target.className.indexOf('container') !== -1) {
                value.changeStatus()
              }
            }
            if (value.isShowMask){
              // console.log(value)
              return (
                <MaskContainer
                  onClick={(e) => bindClick(e)}
                  className="container"
                >
                  <div>
                    <img src={value.nowFlower.imageurl} alt=""/>
                    <h2>{value.nowFlower.name}</h2>
                    <p>花型：{value.nowFlower.instructions}</p>
                  </div>
                </MaskContainer>
              )
            } else {
              return ''
            }
          }
        }
      </MaskConsumer>
    )
  }
}

export default Mask