import React, { PureComponent } from 'react'
import ContentContainer from './styled'
import icon1 from 'assets/images/category/sites/场-详情/剧院式-缩略icon.png'
import icon2 from 'assets/images/category/sites/场-详情/课桌式-缩略icon.png'
import icon3 from 'assets/images/category/sites/场-详情/宴会式-缩略icon.png'
import icon4 from 'assets/images/category/sites/场-详情/客服icon.png'

class DetailContent extends PureComponent {
  componentDidMount() {
  }
  render() {
    return (
      <ContentContainer>
        <img className="img1" src={this.props.content.imageurl} alt=""/>
        <div className="parameter">
          <div className="left">
            <h2>{this.props.content.name}</h2>
            <h2>{this.props.content.address}</h2>
            <h3>{this.props.content.instructions.split(' ')[0]} | {this.props.content.instructions.split(' ')[1]}</h3>
            <div className="place">
              <dl>
                <dt>
                  <img src={icon1} alt=""/>
                </dt>
                <dd>200</dd>
              </dl>
              <dl>
                <dt>
                  <img src={icon2} alt=""/>
                </dt>
                <dd>150</dd>
              </dl>
              <dl>
                <dt>
                  <img src={icon3} alt=""/>
                </dt>
                <dd>150</dd>
              </dl>
            </div>
          </div>
          <div className="right">
            <p>价格</p>
            <span>{this.props.content.price}</span>
            <i>元</i>
            /天
            <div className="server">
              <img src={icon4} alt=""/>
              咨询客服
            </div>
          </div>
        </div>
        <div className="txt-info">
          <h1>酒店介绍:</h1>
          <p>
            上海衡山宾馆是上海著名的六大饭店之一，座落于素有东方“香榭丽舍大街”美称的衡山路、宛平路口，为典型欧式建筑，内部装潢以法兰西风格为主，蕴积着摩登时代的历史风情。宾馆临近徐家汇商业繁华地段，距众多跨国公司、办公楼、购物广场、衡山路酒吧休闲街步行几分钟可达，交通便捷；毗邻徐家汇花园和衡山公园，绿荫叠翠，环境优雅。
          </p>
        </div>
      </ContentContainer>
    )
  }
}

export default DetailContent