import React, { Component } from 'react'

import {CityContainer} from './StyledCity'
// import GuangZhou from 'assets/images/hxj-img/timg.jpg'

export default class City extends Component {
    render() {
        return (
            <CityContainer>
                <header>
                    <i onClick={() => this.handleClickback()}>返回</i>
                    <h4>选择城市</h4>
                </header>
                <section className="city_container">
                    <div>
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        <div className="details">
                            <h4>广州</h4>
                            <span>GuangZhou</span>
                            <div className="city_details">
                                <span>用户量：888</span><span>好评率：69%</span>
                            </div>
                        </div>
                    </div>
                    <div><div className="img"><img src="" alt="" /></div></div>
                    <div><div className="img"><img src="" alt="" /></div></div>
                </section>
            </CityContainer>
        )
    }

    handleClickback(){
        this.props.history.goBack()
    }
}
