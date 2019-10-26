import styled from 'styled-components'
import toRight from 'assets/images/icon/toRight.png'
import issue from 'assets/images/icon/详情-问号.png'

const CarContainer = styled.div`
    position:relative;
    background:white;
<<<<<<< HEAD
    overflow:scroll;
    height:100%;
=======
    // height:100%;
>>>>>>> c214c78a2c513909b6474b52b976d1d135ed102a
    width:100%;
    display:flex;
    flex-direction:column;
`
const CarOrderItem = styled.ul`
    height:2.24rem;
    width:100%;
    overflow:hidden;
    display:flex;
    flex-direction:column;
`
const Devide = styled.div`
    width:3.75rem;
    height:.13rem;
    background:#f3f3f3;
`
const CarOrderDetail = styled.div`
    height:1.94rem;
    width:100%;
    dispaly:flex;
    flex-direction:column;
    >div{
        padding: 0 .15rem;
    }
    
    .basicFee{
        height:0.97rem;
        width:100%;
        display:flex;
        flex-direction:column;
        
        .basicFeeTitle{
            height:.48rem;
            display:flex;
            flex-direction:row
            padding-top:.2rem;
            font-size:.12rem;
            color:#9B9B9B;
            line-height:.28rem;
            >h2{
                width:.9rem;
                font-size:.18rem;
                line-height:.28rem;
                font-family:PingFangSC-Medium,PingFangSC;
                font-weight:500;
                color:rgba(0,0,0,1);
            }
            .carTitle2{
                padding:0 .4rem;
                width:2.15rem;
                display:block;
                text-align:right;
            }
            .carTitle3{
                flex:1;
                font-weight:500;
                color:#000;
                display:block;
                text-align:right;   
            }
        }
    }
    .choicedService{
        height:.97rem;
        width:100%;
        display:flex;
        flex-direction:column;
        .serviceTitle{
            width:100%;
            height:.48rem;
            display:flex;
            flex-direction:row;
            justify-content : space-between;
            padding-top:.2rem;
            font-size:.12rem;
            color:#9B9B9B;
            line-height:.28rem;
            >h2{
                display:flex;
                width:.9rem;
                font-size:.18rem;
                line-height:.28rem;
                font-family:PingFangSC-Medium,PingFangSC;
                font-weight:500;
                color:rgba(0,0,0,1);
            }
            >span{
                width:.49rem;
                height:.25rem;
                background:red;
            }
        }
        
            .service2{
                width:1.75rem;
                padding:0 .2rem;
                display:block;
                text-align:right;
                height:.17rem;
                font-size:.12rem;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(155,155,155,1);
                line-height:.17rem;
            }
            .service3{
                flex:1
                display:block;
                text-align:right;
                height:.17rem;
                font-size:.12rem;
                font-family:PingFangSC-Medium,PingFangSC;
                font-weight:500;
                color:rgba(74,74,74,1);
                line-height:.17rem;
            }
        }
    }

`
const CarOrderSubmit = styled.div`
    padding: .15rem;
    flex : 1;
    width:100%;
    display:flex;
    flex-direction:column;
    .submit1{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        font-size:.12rem;
        font-family:PingFangSC-Medium,PingFangSC;
        font-weight:600;
        color:rgba(74,74,74,1);
        line-height:.2rem;
    }
    .submit2{
        padding:.12rem;
        height:.52rem;
        font-size:.10rem;
        font-family:PingFangSC-Medium,PingFangSC;
        font-weight:500;
        color:rgba(155,155,155,1);
        line-height:.14rem;
        display:flex;
        flex-direction:row;
        
        >p{
            padding-left:.12rem;
            >span{
                color:#37C2BC
            }
        }
    }
    .am-checkbox.am-checkbox-checked .am-checkbox-inner {
        border-color: #37C2BC;
        background: #37C2BC;
    }
    .submitBtn{
        width:3.45rem;
        height:.50rem;
        background:rgba(155,155,155,1);
        border-radius:.10rem;
        font-size:.19rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:.27rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .submitBtnActive{
        width:3.45rem;
        height:.50rem;
        background:#37C2BC;
        border-radius:.10rem;
        font-size:.19rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:.27rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`
const SingleOrder = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`
const SingleItemContainer = styled.div`
height:.17rem;
display:flex;
flex-direction:row;
justify-content:space-between;
>span{
    width:.9rem;
    height:.17rem;
    font-size:.12rem;
    font-family:PingFangSC-Medium,PingFangSC;
    font-weight:500;
    color:rgba(74,74,74,1);
    line-height:.17rem;
}
.carContent2{
    width:2rem;
    padding:0 .25rem;
    height:.17rem;
    font-size:.12rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:.17rem;
    display:block;
    text-align:right;
}
.carContent3{
    height:.17rem;
    font-size:.12rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:500;
    color:rgba(74,74,74,1);
    line-height:.17rem;
    flex:1;
    display:block;
    text-align:right;
}
`
const CarLi = styled.li`
    height:1.12rem;
    width:100%;
    padding:0 .15rem;
    >h2{
        padding-top: .19rem;
        font-weight:500;
        font-size:.18rem;
        line-height:.25rem;
    }
    .carText{
       
        height:.17rem;
        font-size:.12rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(155,155,155,1);
        line-height:.17rem;
    }
    .carRentData{
        width:100%;
        height:.17rem;
        font-size:.12rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(55,194,188,1);
        line-height:.17rem;
        display:flex;
        flex-direction:row;
        justify-content:space-between
        .carRight{
            width:.09rem;
            height:.15rem;
            background:url(${toRight});
            background-size:100%;
        }
    }
`
const ItemContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column ;
`

const MaskContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width:2.67rem;
    height:auto;
    background:rgba(255,255,255,1);
    border-radius:0.15rem;
    padding: .19rem .37rem 0;
    img {
      width: 1.93rem;
      height: 2.1rem;
      margin-bottom: .11rem;
    }
    h2 {
      font-size:0.17rem;
      font-family:PingFangSC-Medium,PingFangSC;
      font-weight:500;
      color:rgba(74,74,74,1);
      line-height:0.24rem;
    }
    p {
      font-size:0.14rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(155,155,155,1);
      line-height:0.17rem;
    }
  }
`

const ChooseData = styled.span`

`
const ShowData = styled.span`

`

const ServiceFee = styled.div`
flex: 1;
display:flex;
flex-direction:row;
align-items:center;
.service1{
    width:.92rem;
    display:flex;
    flex-direction:row;
    height:.17rem;
    font-size:.12rem;
    font-family:PingFangSC-Medium,PingFangSC;
    font-weight:500;
    color:rgba(74,74,74,1);
    line-height:.17rem;
    .issue{
        width:.16rem;
        height:.16rem;
        background:url(${issue});
        background-size:100%;
        margin:0 .05rem;
    }
`
export {
    ServiceFee,
    CarContainer,
    CarOrderItem,
    Devide,
    CarOrderDetail,
    CarOrderSubmit,
    CarLi,
    ItemContainer,
    SingleOrder,
    SingleItemContainer,
    MaskContainer,
    ChooseData,
    ShowData
}