import styled from 'styled-components'
import border from 'components/border'

import rightIcon from 'assets/images/icon/right.png'

const FlowerContainer = border({
  width: '1px 0 0 0',
  color: '#D2D2D2',
  comp: styled.div`
    padding: 0 .23rem 0 .15rem;
    display: flex;
    .pic {
      width: .99rem;
      height: 1.07rem;
      margin: .2rem .38rem .15rem .12rem;
      text-align: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      padding-top: .21rem;
      flex: 1;
      h2{
        width: 100%;
        font-size: .17rem;
        line-height: .24rem;
        font-weight: bold;
        font-family: PingFangSC-Medium,PingFangSC;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h3{
        width: 1.6rem;
        font-size: .14rem;
        line-height: .2rem;
        font-weight: 400;
        font-family: PingFangSC-Regular,PingFangSC;
      }
      h2, h3{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .right{
        display: inline-block;
        width: .09rem;
        height: .15rem;
        background: url(${rightIcon});
        background-size: 100% 100%;
      }
    }
  `
})

export default FlowerContainer