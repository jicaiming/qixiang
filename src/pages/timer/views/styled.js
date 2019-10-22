import styled from 'styled-components'
import goBack from '../../../assets/images/icon/left-back.png'

const TimerContainer = styled.div`
    height:100%;
    width:100%;
    background:white;
    .mask{
        background:white!important;
    }
    .am-calendar .confirm-panel .button {
        background:#37C2BC;
        font-size:.15rem;
        font-family:PingFangSC-Heavy;
        line-height:.18rem;
        color:rgba(255,255,255,1);
        width:.6rem;
    }
    .am-calendar .single-month .row .cell .date-wrapper .date-selected {
        border: none;
        background: #37C2BC;
        color: #fff;
        font-size: .17rem;
    }
    .am-calendar .single-month .row .cell .date-selected {
        color: #37C2BC;
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
                width:.2rem;
                height:.2rem;
                background:url(${goBack});
                background-size:100%;
                left:.15rem;
                opacity:1;
            }
            .confirm{
                border-radius:.1rem;
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