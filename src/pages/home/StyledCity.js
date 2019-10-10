import styled from 'styled-components'

const CityContainer = styled.div`
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
    section.city_container{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        position: relative;
        div{
            flex:1;
            div.img{
                position: relative;
                height:0;
                padding-bottom:53.6%;
                img{
                    width:100%;
                }
            }
            div.details{
                position: absolute;
                left: 0;
                top: 0;
                width:100%;
                height:33.3333%;
                color:#fff;
                text-align:center;
                h4{
                    width:100%;
                    font-size:.17rem;
                    font-weight:500;
                }
                span{
                    width:100%;
                }
                div.city_details{
                    width:100%;
                    font-size:.12rem;
                }
            }
        }

    }
`

export {
    CityContainer
}