import styled from 'styled-components'

const MaskContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width:2.67rem;
    height:auto;
    background:rgba(255,255,255,1);
    border-radius:0.15rem;
    padding: .19rem .37rem 0;
    img {
      width: 1.93rem;
      height: 2.1rem;
      margin-bottom: .11rem;
    }
    h2 {
      font-size:0.17rem;
      font-family:PingFangSC-Medium,PingFangSC;
      font-weight:500;
      color:rgba(74,74,74,1);
      line-height:0.24rem;
    }
    p {
      font-size:0.14rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(155,155,155,1);
      line-height:0.17rem;
    }
  }
`

export default MaskContainer