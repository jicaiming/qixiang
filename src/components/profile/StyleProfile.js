import styled from 'styled-components'

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
`

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

export {
    HeaderContainer,
    OrderContainer,
    OrderListContainer
}