import styled from 'styled-components'

import border from '../../../components/border'

const PrimaryContainer = styled.div`
  margin-top: .2rem;
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

const ItemContainer = border({
  width: '1px 0 0 0',
  color: '#D2D2D2',
  comp: styled.div`
    margin-left: .15rem;
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
      h2{
        font-size: .17rem;
        line-height: .24rem;
        font-weight: 500;
        font-family:PingFangSC-Medium,PingFangSC;
      }
      h3{
        font-size: .14rem;
        line-height: .2rem;
        font-weight: 400;
        font-family:PingFangSC-Regular,PingFangSC;
      }
    }
  `
})

export {
  PrimaryContainer,
  SubContainer,
  ItemContainer
}