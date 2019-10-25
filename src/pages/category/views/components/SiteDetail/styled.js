<<<<<<< HEAD
import styled from 'styled-components'
import leftBack from 'assets/images/icon/left-back.png'

const SiteDetailContainer = styled.div`
  padding-top: .2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header{
    width:100%;
    height:0.44rem;
    background:rgba(55,194,188,1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #fff;
    font-size: .17rem;
    line-height: .21rem;
    font-family: Helvetica;
    .back{
      position: absolute;
      left: .15rem;
      top: .12rem;
      width: .2rem;
      height: .2rem;
      background: url(${leftBack}) no-repeat;
      background-size: 100% 100%;
    }
  }
  footer{
    width:3.75rem;
    height:0.6rem;
    background:rgba(55,194,188,1);
    border-radius:0.2rem 0.2rem 0rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:0.19rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
`

=======
import styled from 'styled-components'
import leftBack from 'assets/images/icon/left-back.png'

const SiteDetailContainer = styled.div`
  padding-top: .2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header{
    width:100%;
    height:0.44rem;
    background:rgba(55,194,188,1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #fff;
    font-size: .17rem;
    line-height: .21rem;
    font-family: Helvetica;
    .back{
      position: absolute;
      left: .15rem;
      top: .12rem;
      width: .2rem;
      height: .2rem;
      background: url(${leftBack}) no-repeat;
      background-size: 100% 100%;
    }
  }
  footer{
    width:3.75rem;
    height:0.6rem;
    background:rgba(55,194,188,1);
    border-radius:0.2rem 0.2rem 0rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:0.19rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
`

>>>>>>> guangruixiao
export default SiteDetailContainer