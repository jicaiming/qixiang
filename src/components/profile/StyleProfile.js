import styled from 'styled-components'
import border from 'components/border.js'

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

const OrderContainer = styled.div`
    margin:0.2rem 0.15rem 0;
    background:#fff;
    border-radius:0.1rem;
    padding:0 0.15rem;
    div.order_header{
        height:0.46rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        >p{
            font-size:0.17rem;
            font-weight:500;
            color:#4A4A4A;
        }
        div{
            display:flex;
            /* justify-content:space-between; */
            p{
                font-weight:500;
                padding-left:0.05rem;
                font-size:0.14rem;
                color:#37C2BC;
            }
        }
    }
    div.service_charge, div.all_charge, div.btn_container{
        margin-top:0.135rem;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        span{
            height:0.165rem;
            line-height:0.165rem;
            font-size:0.12rem;
            color:#9B9B9B;
        }
        p{
            height:0.165rem;
            line-height:0.165rem;
            text-align:right;
            min-width:0.75rem;
            span:nth-of-type(1){
                margin-right:0.04rem;
            }
        }
    }
    div.all_charge{
        margin-top:0.06rem;
        span{
            color:#4A4A4A;
        }
        p{
            span:nth-of-type(1){         
                color:#37C2BC;
                font-size:0.19rem;
            }
        }
    }
    div.btn_container{
        margin:0;
        padding:0.165rem 0 0.2rem 0;
    }
`

const MyButton = border({
    width: '1px',
    style: 'solid',
    color: '',
    radius: 16,
    comp: styled.p` 
        width:0.86rem!important;
        height:0.31rem!important;
        line-height:0.31rem!important;
        text-align:center!important;
        margin-left:0.135rem;
        font-weight:400;
        font-size:0.13rem;
        color: ${(porps) => porps.color};
    `
})


const OrderListContainer = styled.div`
    display:flex;
    margin-bottom:0.05rem;
    /* justify-content:space-between;
    align-items:center; */
    div.img_container{
        width:0.96rem;
        height:0.71rem;
        img{
            width:100%;
            height:100%;
        }
    }
    div.detail_container{
        flex:1;
        margin-left:0.08rem;
        display:flex;
        justify-content:space-between;
        /* align-items:center; */
        div:nth-of-type(1){
            width:1.37rem;
            p{
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            p:nth-of-type(1){
                padding:0.04rem 0 0.02rem;
                font-size:0.15rem;
                color:#000;
                height:0.21rem;
                line-height:1;
                font-weight:400;
            }
            p:nth-of-type(2),p:nth-of-type(3){
                font-size:0.12rem;
                font-weight:400;
                color:#9B9B9B;
                line-height:0.16rem;
            }
        }
        div:nth-of-type(2){
            p{
                text-align:right;
                font-size:0.12rem;
                font-weight:400;
                color:#9B9B9B;
                line-height:0.16rem;
            }
            p:nth-of-type(1){
                padding-top:0.06rem;
                position: relative;;
                span{
                    position: absolute;
                    top:-0.06rem;
                    left:-0.44rem;
                    height:0.35rem;
                    font-size:0.25rem;
                    font-weight:400;
                    color:#9B9B9B;
                    line-height:0.35rem;
                }
            }
        }

    }
`

const NoticeItemContainer = styled.div`
    height:0.67rem;
    padding:0 0.15rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    >div{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        img{
            width:0.25rem;
            height:0.25rem;
        }
        >div{
            margin-left:0.15rem;
            p:nth-of-type(1){
                height:0.185rem;
                line-height:0.185rem;
                font-size:0.13rem;
                font-weight:500;
                color:#000;
            }
            p:nth-of-type(2){
                margin-top:0.025rem;
                height:0.14rem;
                line-height:0.14rem;
                font-size:0.1rem;
                font-weight:300;
                color:#000;
            }
        }
    }
    >p{
        margin-top:-0.2rem;
        height:0.125rem;
        line-height:0.125rem;
        font-size:0.09rem;
        font-weight:300;
        color:#9B9B9B;
    }
`

export {
    HeaderContainer,
    OrderContainer,
    OrderListContainer,
    MyButton,
    NoticeItemContainer
}