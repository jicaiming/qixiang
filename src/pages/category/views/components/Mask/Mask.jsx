import React, { PureComponent } from 'react'
import MaskContainer from './styled'
import { MaskConsumer } from '../../context/MaskContext'

class Mask extends PureComponent {
  render() {
    return (
      <MaskConsumer>
        {
          (value) => {
            function bindClick(e) {
              // console.log(value)
              // console.log(e.target.className.indexOf('container'))
              if (e.target.className.indexOf('container') !== -1) {
                value.changeStatus()
              }
            }
            if (value.isShowMask){
              return (
                <MaskContainer
                  onClick={(e) => bindClick(e)}
                  className="container"
                >
                  <div>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=397026132,2811220690&fm=26&gp=0.jpg" alt=""/>
                    <h2>芳华</h2>
                    <p>花型：粉百合1枝，卡罗拉玫瑰2枝，绿桔梗5朵，尤加利叶5枝。</p>
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