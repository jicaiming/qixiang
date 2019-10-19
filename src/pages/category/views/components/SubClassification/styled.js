import styled from 'styled-components'

const SubContainer = styled.div`
  display: flex;
  padding: .15rem .22rem 0;
  justify-content: space-between;
  > div {
    width:.84rem;
    height:.22rem;
    border-radius:.11rem;
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

export default SubContainer
