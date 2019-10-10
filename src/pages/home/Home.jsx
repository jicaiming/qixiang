import React, { Component } from 'react'

import { HomeContainer}  from './StyledHome'

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeContainer>
                    <header>
                        <div className="home">首页</div>
                        <div className="area" onClick={ () => this.handleClickCity()}><span className='city'>上海市</span><span>徐汇区</span><i></i></div>
                    </header>
                    <section className="banner">
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </section>
                    <ul className="list">
                        <li><img src="" alt=""/><span>商务车</span></li>
                        <li><img src="" alt=""/><span>场地花</span></li>
                        <li><img src="" alt=""/><span>会议厅</span></li>
                        <li><img src="" alt=""/><span>大把预定</span></li>
                        <li><img src="" alt=""/><span>千人厅</span></li>
                    </ul>
                    <section className="hot">
                        <div className="hot_header">
                            <div>
                                <i></i>
                                <h4>热门服务</h4>
                            </div>
                            <span>即将上新<i></i></span>
                        </div>
                        <ul className="hot_container">
                            <li><div><img src="" alt=""/></div></li>
                            <li><div><img src="" alt=""/></div></li>
                        </ul>
                    </section>
                    <section className="classic">
                        <div className="hot_header">
                            <div>
                                <i></i>
                                <h4>经典案例</h4>
                            </div>
                            <span onClick={() => this.handleClickMore()}>查看更多<i></i></span>
                        </div>
                        <ul className="classic_container">
                            <li><div><img src="" alt=""/></div></li>
                            <li><div><img src="" alt=""/></div></li>
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
