import styled from 'styled-components'

const Container = styled.div`
    font-size : 14px;
    display : flex;
    /* text-align : center; */
    flex-direction : column;
    height : 100%;
    width: 100%;
    position: relative;
`
const Main = styled.div`
    font-size : .14rem;
    color: black;
    overflow: hidden;
    flex : 1;
`

const Footer = styled.div`  
    font-size : .12rem;
    color: black;
    height : .49rem;
    background : #FFFFFF;
    display : flex;
`

export { Container , Main , Footer }