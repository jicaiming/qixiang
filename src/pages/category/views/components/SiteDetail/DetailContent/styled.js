import styled from 'styled-components'

const ContentContainer = styled.div`
  flex: 1;
  overflow: auto;
  padding: .23rem .15rem 0;
  position: relative;
  .img1{
    margin-bottom: .13rem;
    width: 100%;
    height: 1.42rem;
  }
  .parameter{
    display: flex;
    justify-content: space-between;
    .left{
      h2{
        font-size:.17rem;
        font-family:PingFangSC-Medium,PingFangSC;
        font-weight:600;
        color:rgba(0,0,0,1);
        line-height:.24rem;
        margin-bottom: .07rem;
      }
      h3{
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:#4A4A4A;
        line-height:.2rem;
        margin-bottom: .05rem;
      }
      .place{
        display: flex;
        justify-content: flex-start;
        dl{
          margin-right: .09rem;
          dt{
            width: .21rem;
            height: .17rem;
            margin-bottom: .05rem;
            img{
              width:100%;
              height: 100%;
            }
          }
          dd{
            font-size:.1rem;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(155,155,155,1);
            line-height:.14rem;
          }
        }
      }
    }
    .right{
      font-size:.14rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(155,155,155,1);
      line-height:.2rem;
      p{
        margin-bottom: .05rem;
      }
      span{
        font-size:.25rem;
        font-family:PingFang-SC-Bold,PingFang-SC;
        font-weight:bold;
        color:rgba(55,194,188,1);
        line-height:.35rem;
      }
      i{
        color: #37C2BC;
        padding: 0 .05rem;
      }
      .server{
        margin-top: .13rem;
        width: 1.4rem;
        height: .48rem;
        border-radius: .24rem 0 0 .24rem;
        background: #37C2BC;
        position:absolute;
        right: 0;
        color:#fff;
        font-size:.19rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        line-height:.27rem;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
          width:.22rem;
          height:.2rem;
          margin-right: .03rem;
          margin: .03rem .06rem 0 0;
        }
      }
    }
  }
  .txt-info{
    margin-top: .17rem;
    h1{
      font-size:.17rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:500;
      color:rgba(0,0,0,1);
      line-height:.24rem;
    }
    p{
      margin-top: .08rem;
      font-size:.14rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(155,155,155,1);
      line-height:.22rem;
      text-indent: 2em;
    }
  }
`

export default ContentContainer