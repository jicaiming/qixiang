import styled from 'styled-components'

const ClassicContainer = styled.div`
    margin-top:.2rem;
    header{
        height:.44rem;
        width:100%;
        background:#37C2BC;
        position:relative;
        color:#fff;
        display:flex;
        align-items:center;
        i{
            width:.4rem;
            height:.44rem;
            line-height:.44rem;
            margin-left:.15rem;
            position:absolute;
        }
        h4{
            flex:1;
            text-align:center;
            font-size:.16rem;
            font-weight:500;
        }
    }
    section.classic_container{
        margin-top:.15rem;
        ul{
            padding: 0 .15rem;
            li{
                width:100%;
                margin-bottom:.15rem;
                div{
                    height:0;
                    position:relative;
                    padding-bottom:31.30435%;
                    border-radius:.1rem;
                    img{
                        width:100%;
                    }                
                }
            }
        }
    }
`

export {
    ClassicContainer
}