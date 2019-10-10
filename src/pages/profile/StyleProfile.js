import styled from 'styled-components'
import border from 'components/border.js'

import bg from 'images/我的/bg.png'


const ProfileMessage = styled.div`
   padding-top:0.2rem;
    >div{
        height:1.58rem;
        background:#37C2BC;
        position: relative;
        >div:nth-of-type(1){
            width: 0.65rem;
            position:absolute;
            left: 1.57rem;
            padding-top: 0.15rem;
            z-index:99;
            img{
                width:100%;
                height:100%;
            }
        }
        >div:nth-of-type(2){
            position:absolute;
            left: 0.15rem;
            top:0.485rem;
            width: 3.45rem;
            height:1.5rem;
            z-index:9;
            background-image:url(${bg}) ; 
            background-size:3.45rem 1.5rem; 
            img{
                width:0.12rem;
                height:0.12rem;
                float:right;
                margin: 0.12rem 0.2rem 0 0;
            }
            >div{
                text-align:center;
                p:nth-of-type(1){
                    padding-top:0.465rem;
                    font-weight:bold;
                    color:#4A4A4A;
                    font-size:0.17rem;
                    line-height:0.24rem;
                }
                p:nth-of-type(2){
                    padding-top:0.115rem;
                    font-weight:lighter;
                    color:#4A4A4A;
                    font-size:0.12rem;
                    line-height:0.165rem;
                }
                p:nth-of-type(3){
                    padding-top:0.24rem;
                    font-weight:lighter;
                    color:#4A4A4A;
                    font-size:0.12rem;
                    line-height:0.165rem;
                }
           }
        }
    }
`

const ProfileOrder = styled.div`
    padding-top:0.63rem;
    h4{
        padding:0 0 0.15rem 0.15rem;
        font-weight:lighter;
        color:#000;
        font-size:0.15rem;
        line-height:0.21rem;
    }
    >div{
        background:#fff;
        height:0.83rem;
        display:flex;
        >div{
            flex:1;
            text-align:center;
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center; 
            align-items:center;
            p{
                margin-top:0.04rem;
                font-size:0.11rem;
                line-height:0.15rem;
                font-weight:lighter;
            }
        }
        div:nth-of-type(1){
            img{
                width:0.28rem;
                height:0.275rem;
            }
        }
        div:nth-of-type(2),div:nth-of-type(4){
            img{
                width:0.28rem;
                height:0.285rem;
            }
        }
        div:nth-of-type(3){
            img{
                width:0.23rem;
                height:0.275rem;
            }
        }
    }
`

const ProfileServe = styled.div`
     padding-top:0.22rem;
     h4{
        padding:0 0 0.165rem 0.15rem;
        font-weight:lighter;
        color:#000;
        font-size:0.15rem;
        line-height:0.21rem;
     }
     >div{
        background:#fff;
     }
`

const ListItem = styled.div`
    margin:0 0.15rem;
    display:flex;
    justify-content:center; 
    align-items:center;

    img:nth-of-type(1){
        width:0.3rem;
        height:0.3rem;
    }
`

// const ListItem = border({
//     width: '0 0 1px 0',
//     style: 'solid',
//     color: '#cecece',
//     comp: styled.div`
//         margin:0 0.15rem;
//     `
// })






export {
    ProfileMessage,
    ProfileOrder,
    ProfileServe,
    ListItem
}