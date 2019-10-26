import styled from 'styled-components'

const ListContainer = styled.div`
  height: 100%;
  padding-bottom: 1.5rem;
  overflow: scroll;
  > div:first-child::after {
    border-width: 0;
  }
`

export default ListContainer