import styled from 'styled-components'

import border from 'components/border'

const PrimaryContainer = styled.div`
  background: #37C2BC;
  height: .45rem;
  padding-top: .1rem;
  width: 100%;
  display: flex;
  font-family: "PingFang";
  > div {
    flex: 1;
    height: .35rem;
    line-height: .35rem;
    margin: 0 .1rem;
    text-align: center;
    color: #fff;
    font-size: .14rem;
    border-radius: .1rem .1rem 0 0;
  }
  > div.active {
    font-size: .18rem;
    font-weight: bold;
    color: #37C2BC;
    background: #fff;
  }
`

const SubContainer = styled.div`
  display: flex;
  padding: .15rem .22rem 0;
  margin-bottom: .02rem;
  justify-content: space-around;
  > div {
    width:84px;
    height:22px;
    border-radius:11px;
    border:1px solid rgba(55,194,188,1);
    font-size: .1rem;
    /* transform: scale(.5); */
    line-height: .14rem;
    font-weight:500;
    font-family:PingFangSC-Medium,PingFangSC;
    color:rgba(55,194,188,1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div.active {
    color: #fff;
    background: #37C2BC; 
  }
`

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
    }
  `
})

const ListContainer = styled.div`
  > div:first-child::after {
    border-width: 0;
  }
`

const TimeBtnContainer = styled.div`
  padding: 0 .11rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  > div {
    border-radius: .15rem .15rem 0 0;
    background: #D8D8D8;
    height: .63rem;
    width: 100%;
    color: #F2F2F2;
    font-size: .19rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const TimeBtnActiveContainer = styled(TimeBtnContainer)`
  color: #fff;
  background: #37C2BC;
`

export {
  PrimaryContainer,
  SubContainer,
  CarContainer,
  SelectContainer,
  PriceContainer,
  ListContainer,
  TimeBtnContainer,
  TimeBtnActiveContainer
}