import React, { Component } from 'react'

<<<<<<< HEAD
import {  CityContainer,CityAreaLiBorder } from './StyledCity'
=======
import {CityContainer} from './StyledCity'
>>>>>>> guangruixiao
import {HomeHeaderContainer} from 'components/StyledHomeHeader.js'

import GuangZhou from 'assets/images/city/guangzhou.png'
import ShangHai from 'assets/images/city/shanghai.png'
import ShenZhen from 'assets/images/city/shenzhen.png'
import Back from 'assets/images/icon/back.png'

import GuangZhouActive from 'assets/images/city/guangzhou_active.png'
import ShangHaiActive from 'assets/images/city/shanghai_active.png'
import ShenZhenActive from 'assets/images/city/shenzhen_active.png'


export default class City extends Component {
<<<<<<< HEAD
    state = {
        active:'广州市',
        // shanghai :'徐汇区',
        // shenzhen :'福田区'
    }
    
=======

>>>>>>> guangruixiao
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
<<<<<<< HEAD
                            <CityAreaLiBorder className={this.state.active === "广州市" ? "active" : ""} onClick={() => this.handleClickArea('广州市','广州')}>广州市</CityAreaLiBorder>
                            <CityAreaLiBorder className={this.state.active === "佛山市" ? "active" : ""}  onClick={() => this.handleClickArea('佛山市','广州')}>佛山市</CityAreaLiBorder>
                            <CityAreaLiBorder className={this.state.active === "东莞市" ? "active last" : "last"}  onClick={() => this.handleClickArea('东莞市','广州')}>东莞市</CityAreaLiBorder>
=======
                            <li className="active">广州市</li>
                            <li>佛山市</li>
                            <li className="last">东莞市</li>
>>>>>>> guangruixiao
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
<<<<<<< HEAD
                            <CityAreaLiBorder className={this.state.active === "徐汇区" ? "active" : ""} onClick={() => this.handleClickArea('徐汇区','上海')}>徐汇区</CityAreaLiBorder>
                            <CityAreaLiBorder className={this.state.active === "杨浦区" ? "active" : ""} onClick={() => this.handleClickArea('杨浦区','上海')}>杨浦区</CityAreaLiBorder>
                            <CityAreaLiBorder className={this.state.active === "普陀区" ? "active last" : "last"} onClick={() => this.handleClickArea('普陀区','上海')}>普陀区</CityAreaLiBorder>
=======
                            <li className="active">徐汇区</li>
                            <li>杨浦区</li>
                            <li className="last">普陀区</li>
>>>>>>> guangruixiao
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
<<<<<<< HEAD
                            <CityAreaLiBorder className={this.state.active === "福田区" ? "active" : ""} onClick={() => this.handleClickArea('福田区','深圳')}>福田区</CityAreaLiBorder>
                            <CityAreaLiBorder className={this.state.active === "南山区" ? "active" : ""} onClick={() => this.handleClickArea('南山区','深圳')}>南山区</CityAreaLiBorder>
                            <CityAreaLiBorder className={this.state.active === "罗湖区" ? "active last" : "last"}  onClick={() => this.handleClickArea('罗湖区','深圳')}>罗湖区</CityAreaLiBorder>
=======
                            <li className="active">福田区</li>
                            <li>南山区</li>
                            <li className="last">罗湖区</li>
>>>>>>> guangruixiao
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
<<<<<<< HEAD
    handleClickArea(area,city){
        this.setState({
            // guangzhou:area,
            // shanghai:area,
            active:area
        })
        localStorage.setItem('area',area)
        localStorage.setItem('city',city)
        console.log(area)
        this.props.history.goBack()
    }
=======
>>>>>>> guangruixiao
}
