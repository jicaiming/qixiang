<<<<<<< HEAD
import React, { PureComponent } from 'react'
import SiteDetailContainer from './styled'
import DetailContainer from './DetailContent/DetailContent'
import connect from '../../connect'

class SiteDetail extends PureComponent {
  constructor() {
    super()
    this.state = {
      // content: {
      //   "id": 9,
      //   "name" : "上海富豪东亚酒店",
      //   "detail" : "富豪厅 1楼",
      //   "price" : 45800,
      //   "img" : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3841372738,2842049830&fm=26&gp=0.jpg",
      //   "info" : "上海衡山宾馆是上海著名的六大饭店之一，座落于素有东方“香榭丽舍大街”美称的衡山路、宛平路口，为典型欧式建筑，内部装潢以法兰西风格为主，蕴积着摩登时代的历史风情。宾馆临近徐家汇商业繁华地段，距众多跨国公司、办公楼、购物广场、衡山路酒吧休闲街步行几分钟可达，交通便捷；毗邻徐家汇花园和衡山公园，绿荫叠翠，环境优雅。"
      // }
    }
  }
  // componentDidMount() {
  //   console.log(this.props.history.location.state)
  //   fetch('http://localhost:9000/data')
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({
  //         content: result
  //       })
  //     })
  // }
  handleBack() {
    this.props.history.goBack();
  }
  handleClick(props) {
    // console.log(this.props.history)
    // console.log(this.props.history.location.state.value)
    this.props.increaseNum(props)
    this.props.history.push('/order/site')
  }
  render() {
    // console.log(this.props)
    // console.log(this.props.history.location.state.value)
    return (
      <SiteDetailContainer>
        <header>
          <div 
            className="back"
            onClick={()=>{this.handleBack()}}  
          ></div>
          场地详情
        </header>
        <DetailContainer
          content={this.props.history.location.state.value}
        ></DetailContainer>
        <footer onClick={()=>this.handleClick(this.props.history.location.state)}>
          立即预定
        </footer>
      </SiteDetailContainer>
    )
  }
}

=======
import React, { PureComponent } from 'react'
import SiteDetailContainer from './styled'
import DetailContainer from './DetailContent/DetailContent'
import connect from '../../connect'

class SiteDetail extends PureComponent {
  constructor() {
    super()
    this.state = {
      // content: {
      //   "id": 9,
      //   "name" : "上海富豪东亚酒店",
      //   "detail" : "富豪厅 1楼",
      //   "price" : 45800,
      //   "img" : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3841372738,2842049830&fm=26&gp=0.jpg",
      //   "info" : "上海衡山宾馆是上海著名的六大饭店之一，座落于素有东方“香榭丽舍大街”美称的衡山路、宛平路口，为典型欧式建筑，内部装潢以法兰西风格为主，蕴积着摩登时代的历史风情。宾馆临近徐家汇商业繁华地段，距众多跨国公司、办公楼、购物广场、衡山路酒吧休闲街步行几分钟可达，交通便捷；毗邻徐家汇花园和衡山公园，绿荫叠翠，环境优雅。"
      // }
    }
  }
  // componentDidMount() {
  //   console.log(this.props.history.location.state)
  //   fetch('http://localhost:9000/data')
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({
  //         content: result
  //       })
  //     })
  // }
  handleBack() {
    this.props.history.goBack();
  }
  handleClick(props) {
    // console.log(this.props.history)
    // console.log(this.props.history.location.state.value)
    this.props.increaseNum(props)
    this.props.history.push('/order/site')
  }
  render() {
    // console.log(this.props)
    // console.log(this.props.history.location.state.value)
    return (
      <SiteDetailContainer>
        <header>
          <div 
            className="back"
            onClick={()=>{this.handleBack()}}  
          ></div>
          场地详情
        </header>
        <DetailContainer
          content={this.props.history.location.state.value}
        ></DetailContainer>
        <footer onClick={()=>this.handleClick(this.props.history.location.state)}>
          立即预定
        </footer>
      </SiteDetailContainer>
    )
  }
}

>>>>>>> guangruixiao
export default connect(SiteDetail)