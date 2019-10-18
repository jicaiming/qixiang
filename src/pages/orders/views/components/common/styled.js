import styled from 'styled-components'
import back from 'assets/images/icon/left-back.png'

const OrderHeaderStyle = styled.div`
  width:100%;
  margin-top:.2rem;
  height:.44rem
  background-color:#37C2BC;
  display:flex;
  align-items : center;
  justify-content: center;
  position:relative;
  >h2 {
    font-size:.17rem;
    display:flex;
    align-items : center;
    justify-content: center;
    width:.68rem;
    height:.24rem;
    color:white;
    line-height:.21rem;
    font-weight:400
  }
`
const BackIcon = styled.div`
position: absolute;
left: .15rem;
top: .12rem;
width: .2rem;
height: .2rem;
background: url(${back}) no-repeat;
background-size: 100% 100%;
`
const OrderMainStyle = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
`
export {
  OrderHeaderStyle,
  BackIcon,
  OrderMainStyle
}