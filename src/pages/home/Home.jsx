import React, { Component } from 'react'

import { HomeContainer}  from './StyledHome'
import { Carousel, WingBlank } from 'antd-mobile';


import MPV from 'assets/images/home/mpv.png'
import FieldFlower from 'assets/images/home/FieldFlower.png'
import ConferenceHall from 'assets/images/home/ConferenceHall.png'
import BusBooking from 'assets/images/home/BusBooking.png'
import BigHall from 'assets/images/home/BigHall.png'
import HotServer from 'assets/images/home/hot_server.png'
import HomeClassic1 from 'assets/images/classic_case/home_classic1.png'
import HomeClassic2 from 'assets/images/classic_case/home_classic2.png'

import Right from 'assets/images/icon/right.png'
import Down from 'assets/images/icon/down.png'


export default class Home extends Component {
    state = {
        data: ['banner1', 'banner2', 'banner3'],
        imgHeight: 176,
    }

    render() {
        return (
                <HomeContainer className="bbb">
                    <header>
                        <div className="home_home">首页</div>
                        <div className="home_area" onClick={ () => this.handleClickCity()}><span className='city'>上海市</span><span>徐汇区</span><img src={Down} alt=""/></div>
                    </header>
                    <div className="home_scroll">
                        <section className="home_banner">
                            <WingBlank>
                                <Carousel
                                    dots={false}
                                    infinite
                                    autoplay={true}
                                    autoplayInterval={1500}
                                >
                                    {this.state.data.map(val => (
                                        <a
                                            key={val}
                                            href="http://www.alipay.com"
                                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                            >
                                            <img
                                                src={require(`assets/images/home/${val}.png`)}
                                                alt=""
                                                style={{ width: '100%', verticalAlign: 'top' }}
                                                onLoad={() => {
                                                    window.dispatchEvent(new Event('resize'));
                                                    this.setState({ imgHeight: 'auto' });
                                                }}
                                            />
                                        </a>
                                    ))}
                                </Carousel>
                            </WingBlank>
                        </section>
                        <ul className="home_list">
                            <li onClick={ () => this.handleClickMPV()}><img src={MPV} alt=""/><span>商务车</span></li>
                            <li onClick={ () => this.handleClickFieldFlower()}><img src={FieldFlower} alt=""/><span>场地花</span></li>
                            <li onClick={ () => this.handleClickConferenceHall()}><img src={ConferenceHall} alt=""/><span>会议厅</span></li>
                            <li onClick={ () => this.handleClickBusBooking()}><img src={BusBooking} alt=""/><span>大巴预定</span></li>
                            <li onClick={ () => this.handleClickBusBigHall()}><img src={BigHall} alt=""/><span>千人厅</span></li>
                        </ul>
                        <section className="home_hot">
                            <div className="hot_header">
                                <div>
                                    <i></i>
                                    <h4>热门服务</h4>
                                </div>
                                <span>即将上新<img src={Right} alt=""/></span>
                            </div>
                            <ul className="hot_container">
                                <li><div><img src={HotServer} alt=""/></div></li>
                                <li><div><img src={HotServer} alt=""/></div></li>
                            </ul>
                        </section>
                        <section className="home_classic">
                            <div className="hot_header">
                                <div>
                                    <i></i>
                                    <h4>经典案例</h4>
                                </div>
                                <span onClick={ () => this.handleClickMore()}>查看更多<img src={Right} alt=""/></span>
                            </div>
                            <ul className="classic_container">
                                <li onClick={() => this.handleClickHomeClassic1()}><div><img src={HomeClassic1} alt=""/></div></li>
                                <li onClick={() => this.handleClickHomeClassic2()}><div><img src={HomeClassic2} alt=""/></div></li>
                            </ul>
                        </section>
                    </div>
                </HomeContainer>
        )
    }

    handleClickCity(){
        this.props.history.push('/city')
    }

    handleClickMore(){
        this.props.history.push('/classic')
    }
    handleClickMPV(){
        this.props.history.push('category/car/1')
    }
    handleClickFieldFlower(){
        this.props.history.push('category/flower/1')
    }
    handleClickConferenceHall(){
        this.props.history.push('category/site/1')
    }
    handleClickBusBooking(){
        this.props.history.push('category/car/3')
    }
    handleClickBusBigHall(){
        this.props.history.push('category/site/3')
    }
    handleClickHomeClassic1(){
        this.props.history.push('/classic/classic1')
    }
    handleClickHomeClassic2(){
        this.props.history.push('/classic/classic2')
    }

}
