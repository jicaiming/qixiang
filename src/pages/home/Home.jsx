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


export default class Home extends Component {
    state = {
        data: ['banner1', 'banner2', 'banner3']
    }

    render() {
        return (
            <div>
                <HomeContainer>
                    <header>
                        <div className="home_home">首页</div>
                        <div className="area" onClick={ () => this.handleClickCity()}><span className='city'>上海市</span><span>徐汇区</span><i></i></div>
                    </header>
                    <section className="home_banner">
                        <WingBlank>
                            <Carousel
                                dots={false}
                                >
                                {this.state.data.map(val => (
                                    <img
                                        src={require(`assets/images/home/${val}.png`)}
                                        key={val}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                    /> 
                                ))}
                            </Carousel>
                        </WingBlank>
                    </section>
                    <ul className="home_list">
                        <li><img src={MPV} alt=""/><span>商务车</span></li>
                        <li><img src={FieldFlower} alt=""/><span>场地花</span></li>
                        <li><img src={ConferenceHall} alt=""/><span>会议厅</span></li>
                        <li><img src={BusBooking} alt=""/><span>大巴预定</span></li>
                        <li><img src={BigHall} alt=""/><span>千人厅</span></li>
                    </ul>
                    <section className="home_hot">
                        <div className="hot_header">
                            <div>
                                <i></i>
                                <h4>热门服务</h4>
                            </div>
                            <span>即将上新<i></i></span>
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
                            <span onClick={() => this.handleClickMore()}>查看更多<i></i></span>
                        </div>
                        <ul className="classic_container">
                            <li><div><img src={HomeClassic1} alt=""/></div></li>
                            <li><div><img src={HomeClassic2} alt=""/></div></li>
                        </ul>
                    </section>

                </HomeContainer>
            </div>
        )
    }


    // 跳转到城市选择的页面
    handleClickCity(){
        this.props.history.push('/city')
    }

    handleClickMore(){
        this.props.history.push('/classic')
    }


}
