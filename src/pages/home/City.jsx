import React, { Component } from 'react'

import {CityContainer} from './StyledCity'
import GuangZhou from 'assets/images/city/guangzhou.png'
import ShangHai from 'assets/images/city/shanghai.png'
import ShenZhen from 'assets/images/city/shenzhen.png'

export default class City extends Component {
    render() {
        return (
            <CityContainer>
                <header>
                    <i onClick={() => this.handleClickback()}>返回</i>
                    <h4>选择城市</h4>
                </header>
                <section className="city_container">
                    <div className="city_item" onClick={ () => this.handleClickCityItem()}>
                        <div className="city_img">
                            <img src={GuangZhou} alt="" />
                        </div>
                        <div className="city_name">
                            <h4>广州</h4>
                            <span>GuangZhou</span>
                        </div>
                        <div className="city_details">
                            <span>用户量：888</span><span>好评率：69%</span>
                        </div>
                    </div>
                    <div className="city_item"  onClick={ () => this.handleClickCityItem()}>
                        <div className="city_img"><img src={ShangHai} alt="" />
                        <div className="city_name">
                            <h4>上海</h4>
                            <span>ShangHai</span>
                        </div>
                        <div className="city_details">
                            <span>用户量：888</span><span>好评率：69%</span>
                        </div>
                    </div></div>
                    <div className="city_item"  onClick={ () => this.handleClickCityItem()}>
                        <div className="city_img"><img src={ShenZhen} alt="" />
                        <div className="city_name">
                            <h4>深圳</h4>
                            <span>ShenZhen</span>
                        </div>
                        <div className="city_details">
                            <span>用户量：888</span><span>好评率：69%</span>
                        </div>
                    </div></div>
                </section>
            </CityContainer>
        )
    }

    handleClickback(){
        this.props.history.goBack()
    }

    handleClickCityItem(){
        console.log(111)
    }
}
