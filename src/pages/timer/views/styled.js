import styled from 'styled-components'
import goBack from '../../../assets/images/icon/left-back.png'

const TimerContainer = styled.div`
    height:100%;
    width:100%;
    background:white;
    .mask{
        background:white!important;
    }
    .content{
        padding-top:.2rem;
        
        width:100%;
        .header{
            position:relative;
            margin:0!important;
            background:#37C2BC;
            height:.44rem!important;
            .goBack{
                position:absolute;
                width:20px;
                height:20px;
                background:url(${goBack});
                background-size:100%;
                left:.15rem;
                opacity:1;
            }
            .confirm{
                position:absolute;
                width:.34rem;
                height:.21rem;
                right:.15rem;
                font-size:.17rem!important;
                font-family:PingFangSC-Heavy!important;
                line-height:.21rem;
                color:rgba(255,255,255,1)!important;
                font-weight:400!important;
            }
            .title{
                font-size:.17rem!important;
                font-family:PingFangSC-Heavy!important;
                line-height:.21rem;
                color:rgba(255,255,255,1)!important;
                font-weight:400!important;
            }
            .right{
                font-size:.17rem!important;
                font-family:PingFangSC-Heavy!important;
                line-height:.21rem;
                color:rgba(255,255,255,1)!important;
                font-weight:400!important;
                display:absolute!important;
                top:.12rem!important;
                right:.15rem!important;
            }
        }
    }
`

export {TimerContainer}