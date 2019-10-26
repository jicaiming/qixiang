import styled from 'styled-components'

import border from 'components/border.js'


const MyOrderContainer = styled.div`
    margin-top:0.2rem;
    height:100%;
    display:flex;
    flex-direction:column;
`

const NavContainer = border({
    width: '0 0 1px 0',
    style: 'solid',
    color: '#979797',
    comp: styled.div`
        height:0.48rem;
        font-size : .12rem;
        color: black;
        background : #FFFFFF;
        display : flex;
        align-items:center;
        a{
            flex:1;
            div{
                text-align:center;
                font-size:0.13rem;
                color:#4a4a4a;
            }
            .active{
                color:#37C2BC;
            }
        }
`
})



const MainContainer = styled.div`
    flex:1;
    height:100%;
`

const Container = styled.div`
    height:100%;
    overflow:scroll;
    div:last-child{
        margin-bottom:0.15rem;
    }
`

export {
    MyOrderContainer,
    NavContainer,
    MainContainer,
    Container
}