import styled from 'styled-components'

const HomeHeaderContainer = styled.div`
    height:.44rem;
    width:100%;
    background:#37C2BC;
    position:relative;
    color:#fff;
    display:flex;
    align-items:center;
    i{
        width:.22rem;
        height:.22rem;
        line-height:.22rem;
        margin-left:.15rem;
        position:absolute;
        img{
            width:100%;
        }
    }
    h4{
        flex:1;
        text-align:center;
        font-size:.16rem;
        font-weight:500;
    }
`

export {
    HomeHeaderContainer
}