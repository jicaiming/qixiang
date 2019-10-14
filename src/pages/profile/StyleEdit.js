import styled from 'styled-components'

import border from 'components/border.js'





const EditContainer = styled.div`
    margin-top:0.2rem;
    background:#fff;
    height: 100%;
    
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
const AddImgContainer = border({
    width: '1px 0',
    style: 'solid',
    color: '#c2c2c2',
    comp: styled.div`
        margin: 0 0.15rem;
        height:0.5rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        span{
            color:#000;
            font-size:0.13rem;
            font-weight:normal;
        }
    `
})


const RadioContainer = styled.div`
   .my-radio{
       margin-left:0.16rem;
       font-size:0.12rem;
        .am-radio {
            width:0.18rem;
            height:0.18rem;
            border: 1px solid #f00;
            border-radius: 50%;
            margin-right: 0.05rem;
            .am-radio-inner:after{
                border-radius:50%;
                border-width:0;
                background:#f00;
                width:0.12rem;
                height:0.12rem;
                top: 0.018rem;
                right:0.02rem;
                /* right:50%;
                top:50%;
                transform:translate(50%,-50%); */
            }
            
        }
   }
`

const UserContainer = styled.div`
    height:0.5rem;
    display:flex;
    align-items:center;
    >div{
        width:100%;
        div.am-list-line{
            justify-content:space-between;
            div.am-input-label {
                font-size:0.13rem!important;
                font-weight:normal!important;
            }
            div.am-input-control{
                input{
                    text-align:right;
                    font-size:0.12rem;
                }
            }
        }
    }
`

const CityContainer = styled.div`
    height:0.5rem;
    display:flex;
    align-items:center;
    >div{
        width:100%;
    }
    div.am-list-content{
        font-size:0.13rem!important;
        font-weight:normal!important;
    }
    div.am-list-extra{
        font-size:0.12rem!important;
        color:#000!important;
    }
    div.am-list-arrow{
        display:none!important;
    }
`


export {
    EditContainer,
    HeaderContainer,
    RadioContainer,
    AddImgContainer,
    UserContainer,
    CityContainer
}