import styled from 'styled-components'

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

export default PrimaryContainer