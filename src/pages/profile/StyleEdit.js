import styled from 'styled-components'
const EditContainer = styled.div`
    margin-top:0.2rem;
    
`

const HeaderContainer = styled.header`
        height:.44rem;
        width:100%;
        background:#37C2BC;
        position:relative;
        color:#fff;
        display:flex;
        align-items:center;
        i{
            width:.2rem;
            height:.2rem;
            margin-left:.15rem;
            position:absolute;
            img{
                width:100%;
                height:100%;
            }
        }
        h4{
            flex:1;
            text-align:center;
            font-size:.17rem;
            font-weight:500;
        }
`


export {
    EditContainer,
    HeaderContainer
}