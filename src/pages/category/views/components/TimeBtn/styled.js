import styled from 'styled-components'

const TimeBtnContainer = styled.div`
  padding: 0 .11rem;
  position: absolute;
  bottom: .49rem;
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
  TimeBtnContainer,
  TimeBtnActiveContainer
}