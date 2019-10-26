import styled from 'styled-components'
import border from 'components/border'

const SelectContainer = border({
  width: '1px 0 0 0',
  color: '#D2D2D2',
  comp: styled.div`
    width: 100%;
    margin-top: .07rem;
    padding-top: .06rem;
    display: flex;
    justify-content: space-between;
    .price {
      padding-right: .07rem;
    }
    .num {
      img {
        width: .21rem;
        height: .21rem;
      }
      p {
        white-space: nowrap;
      }
    }
    h4 {
      font-size: .14rem;
      font-family: PingFangSC-Regular,PingFangSC;
      font-weight: 400;
      color: rgba(74,74,74,1);
      line-height: .2rem;
    }
    p {
      font-size:25px;
      font-family:PingFang-SC-Bold,PingFang-SC;
      font-weight:bold;
      color:rgba(55,194,188,1);
      line-height:35px;
      i {
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(55,194,188,1);
        line-height:20px;
      }
      span {
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(155,155,155,1);
        line-height:20px;
      }
      em {
        padding: 0 .09rem;
        color: #9B9B9B;
        font-weight: 400;
      }
      em.active {
        color: #37C2BC;
      }
    }
  `
})

const PriceContainer = border({
  width: '0 1px 0 0',
  color: '#D2D2D2',
  comp: styled.div`
    width: .93rem;
    p {
      text-align: right;
      white-space: nowrap;
    }
  `
})

export {
  SelectContainer,
  PriceContainer
}