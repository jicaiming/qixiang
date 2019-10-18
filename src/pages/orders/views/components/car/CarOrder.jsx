import React ,{PureComponent} from 'react'
import {Button , Switch,Checkbox} from 'antd-mobile'
import BScroll from 'better-scroll'

import {CarContainer,CarOrderItem,Devide,CarOrderDetail,CarOrderSubmit,ItemContainer} from './styled'

import CarItem from './CarItem'
import CarSingleOrder from './CarSingleOrder'

export default class CarOrder extends PureComponent{
    componentDidMount() {
        let wrapper = document.querySelector('.bScrollWrapper')
        new BScroll(wrapper, {
          scrollY: true,
          mouseWheel:true
        })
      }
    render(){
        return (
            <CarContainer>
                <CarOrderItem className = 'bScrollWrapper'>
                    <ItemContainer>
                        <CarItem></CarItem>
                        <CarItem></CarItem>
                        <CarItem></CarItem>
                    </ItemContainer>
                </CarOrderItem>
                <Devide></Devide>
                <CarOrderDetail>
                    <div className = "basicFee">
                        <div className = "basicFeeTitle">
                            <h2>基本费用</h2>
                            <span className="carTitle2">日均费用x数量x租用天数</span>
                            <span className="carTitle3">价格</span>
                        </div>
                        <CarSingleOrder></CarSingleOrder>
                    </div>
                    <div className = "choicedService">
                        <div className = "serviceTitle">
                            <h2>选择服务</h2>
                            <Switch></Switch>
                        </div>
                        <div className="serviceContent">
                                <div className="service1">
                                    <span >安全保障险</span>
                                    <span className ="issue"></span>
                                </div>
                                <div className="service2">
                                    <span>
                                    350
                                    </span>
                                    x
                                    <span>
                                       7
                                    </span>
                                </div>
                                <div
                                    className="service3"
                                ><span>2450</span>元</div>
                            </div>
                    </div>
                </CarOrderDetail>
                <Devide></Devide>
                <CarOrderSubmit>
                    <div className="submit1">
                        <span>租金合计</span>
                        <div><span>0</span>元</div>
                    </div>
                    <div className="submit2">
                        <Checkbox></Checkbox>
                        <p>我已阅读并同意<span>《企享科技有限公司服务协议》</span>和<span>《企享科技租车合同》</span>的所有条例。</p>
                    </div>
                    <Button className="submitBtn">
                        请选择租用时间
                    </Button>
                </CarOrderSubmit>
            </CarContainer>
        )
    }
}