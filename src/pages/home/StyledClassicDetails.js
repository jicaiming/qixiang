import styled from 'styled-components'

const ClassicDetailsContainer = styled.div`
    margin-top:.2rem;
    display:flex;
    flex-direction:column;
    height:100%;
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
    div.classic_wrapper{
        flex:1;
        overflow: hidden;
        text-align:center;
        >div.classic_son{
            height: 0;
            position: relative;
            padding-bottom:485%;
            img{
                width:100%;
            }
            button.customer_service{
                background:#37C2BC;
                height:.5rem;
                width:3.34rem;
                border-radius:.1rem;
                border:none;
                color:#fff;
                font-size:.18rem;
            }
        }

    }

`


export {
    ClassicDetailsContainer
}