import styled from 'styled-components'
import border from 'components/border'

const CarContainer = border({
  width: '1px 0 0 0',
  color: '#D2D2D2',
  comp: styled.div`
    padding: 0 .23rem 0 .15rem;
    display: flex;
    .pic {
      width: 1.36rem;
      height: 1.02rem;
      margin: .27rem .13rem .15rem .12rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      padding-top: .21rem;
      flex: 1;
      h2{
        font-size: .17rem;
        line-height: .24rem;
        font-weight: bold;
        font-family: PingFangSC-Medium,PingFangSC;
      }
      h3{
        font-size: .14rem;
        line-height: .2rem;
        font-weight: 400;
        font-family: PingFangSC-Regular,PingFangSC;
      }
    }
  `
})

export default CarContainer