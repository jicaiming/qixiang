import React, { Component } from 'react'

import {    CityContainer,
            CityAreaLiBorder
        } from './StyledCity'
import {HomeHeaderContainer} from 'components/StyledHomeHeader.js'

import GuangZhou from 'assets/images/city/guangzhou.png'
import ShangHai from 'assets/images/city/shanghai.png'
import ShenZhen from 'assets/images/city/shenzhen.png'
import Back from 'assets/images/icon/back.png'

import GuangZhouActive from 'assets/images/city/guangzhou_active.png'
import ShangHaiActive from 'assets/images/city/shanghai_active.png'
import ShenZhenActive from 'assets/images/city/shenzhen_active.png'


export default class City extends Component {

    // state = {
    //     active:'active'
    // }
    
    render() {
        return (
            <CityContainer>
                <HomeHeaderContainer>
                    <i onClick={() => this.handleClickback()}><img src={Back} alt=""/> </i>
                    <h4>选择城市</h4>
                </HomeHeaderContainer>
                <section className="city_container">
                    <div className="city_item" onClick={ () => this.handleClickCityItem()}>
                        <div className="city_img">
                            <img src={GuangZhou} alt="" />
                            <img src={GuangZhouActive} alt="" className="city_img_active"/>
                        </div>
                        <div className="city_name">
                            <h4>广州</h4>
                            <span>GuangZhou</span>
                        </div>
                        <div className="city_details">
                            <span>用户量：888</span><span>好评率：69%</span>
                        </div>
                        <ul className="city_area">
                            <CityAreaLiBorder className="active" onClick={() => this.handleClickArea('广州市')}>广州市</CityAreaLiBorder>
                            <CityAreaLiBorder onClick={() => this.handleClickArea('佛山市')}>佛山市</CityAreaLiBorder>
                            <CityAreaLiBorder className="last" onClick={() => this.handleClickArea('东莞市')}>东莞市</CityAreaLiBorder>
                        </ul>
                    </div>
                    <div className="city_item"  onClick={ () => this.handleClickCityItem()}>
                        <div className="city_img">
                            <img src={ShangHai} alt="" />
                            <img src={ShangHaiActive} alt="" className="city_img_active"/>
                        </div>
                        <div className="city_name">
                            <h4>上海</h4>
                            <span>ShangHai</span>
                        </div>
                        <div className="city_details">
                            <span>用户量：888</span><span>好评率：69%</span>
                        </div>
                        <ul className="city_area">
                            <CityAreaLiBorder className="active" onClick={() => this.handleClickArea('徐汇区')}>徐汇区</CityAreaLiBorder>
                            <CityAreaLiBorder onClick={() => this.handleClickArea('杨浦区')}>杨浦区</CityAreaLiBorder>
                            <CityAreaLiBorder className="last" onClick={() => this.handleClickArea('普陀区')}>普陀区</CityAreaLiBorder>
                        </ul>
                    </div>
                    <div className="city_item"  onClick={ () => this.handleClickCityItem()}>
                        <div className="city_img">
                            <img src={ShenZhen} alt="" />
                            <img src={ShenZhenActive} alt="" className="city_img_active"/>
                        </div>
                        <div className="city_name">
                            <h4>深圳</h4>
                            <span>ShenZhen</span>
                        </div>
                        <div className="city_details">
                            <span>用户量：888</span><span>好评率：69%</span>
                        </div>
                        <ul className="city_area">
                            <CityAreaLiBorder className="active" onClick={() => this.handleClickArea('福田区')}>福田区</CityAreaLiBorder>
                            <CityAreaLiBorder onClick={() => this.handleClickArea('南山区')}>南山区</CityAreaLiBorder>
                            <CityAreaLiBorder className="last" onClick={() => this.handleClickArea('罗湖区')}>罗湖区</CityAreaLiBorder>
                        </ul>
                    </div>
                </section>
            </CityContainer>
        )
    }

    handleClickback(){
        this.props.history.goBack()
    }

    handleClickCityItem(){
        // console.log(111)
    }
    handleClickArea(area){
        console.log(area)
    }
}
