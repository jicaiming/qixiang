import styled from 'styled-components'
import border from 'components/border.js'

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
                .city_img_active{
                    display:none;
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
            ul.city_area{
                position:absolute;
                bottom: 0;
                left: 0;
                z-index:999;
                color:#fff;
                background:#37C2BC;
                width:100%;
                height:.75rem;
                display:none;
                li.active{
                    background:#0C7E79;
                }
                li.last{
                    border-right:none;
                }
            }
        }
        div.city_item:hover ul.city_area{
            display:flex;
        }
        div.city_item:hover div.city_img>.city_img_active{
            display:inline-block;
        }
        div.city_item:hover div.city_img>img{
            display:none;
        }
    }
`

const CityAreaLi = styled.li`
    flex:1;
    height:100%;
    line-height:.75rem;
    text-align:center;
    /* border-right:1px solid #089791; */
`

const CityAreaLiBorder = border({
    width: '0 1px',
    style: 'solid',
    color: '#089791',
    comp: CityAreaLi
})

export {
    CityContainer,
    CityAreaLiBorder
}