import styled from 'styled-components'

const CityContainer = styled.div`
    margin-top:.2rem;
    section.city_container{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        div.city_item{
            flex:1;
            position: relative;
            div.city_img{
                position: relative;
                height:0;
                padding-bottom:53.6%;
                img{
                    width:100%;
                }
            }
            div.city_name{
                position: absolute;
                top: 50%;
                left: 50%;
                height: 40%;
                width: 50%;
                margin: -10% 0 0 -25%;
                color:#fff;
                text-align:center;
                display:flex;
                flex-direction:column;
                justify-content:center;
                h4{
                    width:100%;
                    font-size:.17rem;
                    font-weight:500;
                    font-family:'苹方 粗体';
                }
                span{
                    /* font-weight:600; */
                    font-family:'苹方 粗体';
                }
            }
            div.city_details{
                font-size:.12rem;
                position:absolute;
                bottom: .1rem;
                left:.15rem;
                color:#fff;
                span{
                    margin-right:.775rem;
                }
            }
        }

    }
`

export {
    CityContainer
}