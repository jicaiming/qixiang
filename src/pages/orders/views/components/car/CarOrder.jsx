import React, { PureComponent } from 'react'
import { Button, Switch, Checkbox } from 'antd-mobile'
import BScroll from 'better-scroll'
import { withRouter } from 'react-router-dom'
import { CarContainer, CarOrderItem, Devide, CarOrderDetail, CarOrderSubmit, ItemContainer, ServiceFee } from './styled'

import CarItem from './CarItem'
import CarSingleOrder from './CarSingleOrder'
import connect from '../../connect'
import axios from 'axios' 
import post from 'utils/http'


class CarOrder extends PureComponent {
    constructor() {
        super()
        this.state = {
            isChecked: true,
            isSwitch: false,
            totalCost : 0
        }
    }

    componentDidMount() {
        let wrapper = document.querySelector('.bScrollWrapper')
        new BScroll(wrapper, {
            scrollY: true,
            click: true,
            mouseWheel: true
        })
    }
    handleClick() {
        let date = Date.now()
        let orderId = date+'1'+Math.floor((Math.random()*100000)+1)
        let {total} = this.props.allData
        let cartList = this.props.allData.buyList
        


        cartList.forEach((value,index)=>{
            delete value.address 
            delete value.instructions
            delete value.img 
            delete value.name 
            delete value.price
            delete value.firstclassid
            delete value.secondclassid 
            delete value.inventory
            delete value.imageurl
        })
        let timeList = this.props.timeList
        let serviceFee = total*50
        cartList.map((value,index)=>{
            timeList.map((v,i)=>{
                if(v.id === value.id){
                    value = Object.assign(value,v)
                }
            })
        })
       
        let data = {
            orderId:orderId ,
            cartList:cartList,
            isHasServiceFee :serviceFee,
            orderAmount: this.state.totalCost
        }
        if (this.state.isChecked === true) {
            this.props.clearNum()
            this.props.clearTimeList()
            this.props.history.goBack()
        }
        console.log(data)
        setTimeout(() => {
            axios({
            url:'/api/commitOrder',
            method:'POST',
            params:JSON.stringify(data),
            headers:'Content-type:application/json'

        }).then(res=>{
            console.log(res.data)
        })
        }, 0);
        
        // axios({
        //     method: 'post',
        //     url: '/api/commitOrder',
        //     params:JSON.stringify(data)
        // }).then(res => {
        //     console.log(res.data)
        // })
        // axios.post('/api/commitOrder',data).then(function(res){
        //     console.log(res)
        // })
    }
    handleClickAgreement() {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
    handleClickSwitch() {
        this.setState({
            isSwitch: !this.state.isSwitch
        })
    }
    render() {
        let { buyList, total } = this.props.allData
        let timeList = this.props.timeList
        let totalFee = 0
        buyList.forEach((value, index) => {
            timeList.forEach((v, i) => {
                if (value.id === v.id) {
                    totalFee += value.price * value.count * v.dayCount
                }
            })
        })
        if (this.state.isSwitch === true) {
            totalFee += total * 50
            
        }
        this.setState({totalCost : totalFee})
        let timeSelected = true
        this.props.timeList.forEach((value, index) => {
            if (value.dayCount !== 0) {
                timeSelected = false
            }
        })
        return (
            <CarContainer>
                <CarOrderItem className='bScrollWrapper'>
                    <ItemContainer>
                        {
                            buyList.map((value, index) => (
                                <CarItem key={index} value={value}></CarItem>
                            )
                            )
                        }
                    </ItemContainer>
                </CarOrderItem>
                <Devide></Devide>
                <CarOrderDetail>
                    <div className="basicFee">
                        <div className="basicFeeTitle">
                            <h2>基本费用</h2>
                            <span className="carTitle2">日均费用x数量x租用天数</span>
                            <span className="carTitle3">价格</span>
                        </div>
                        <CarSingleOrder></CarSingleOrder>
                    </div>
                    <div className="choicedService">
                        <div className="serviceTitle">
                            <h2>选择服务</h2>
                            <Switch
                                color="#37C2BC"
                                checked={this.state.isSwitch}
                                disabled={false}
                                onClick={this.handleClickSwitch.bind(this)}
                            ></Switch>
                        </div>
                        {
                            this.state.isSwitch === true
                                ? <ServiceFee>
                                    <div className="service1">
                                        <span >安全保障险</span>
                                        <span className="issue" ></span>
                                    </div>
                                    <div className="service2">
                                        <span>
                                            50
                                    </span>
                                        x
                                    <span>
                                            {total}
                                        </span>
                                    </div>
                                    <div
                                        className="service3"
                                    ><span>{total * 50}</span>元</div>
                                </ServiceFee>
                                : ''
                        }

                    </div>
                </CarOrderDetail>
                <Devide></Devide>
                <CarOrderSubmit>
                    <div className="submit1">
                        <span>租金合计</span>
                        <div><span>{this.state.totalCost}</span>元</div>
                    </div>
                    <div className="submit2">
                        <Checkbox
                            checked={this.state.isChecked}
                            onClick={this.handleClickAgreement.bind(this)}
                        ></Checkbox>
                        <p>我已阅读并同意<span>《企享科技有限公司服务协议》</span>和<span>《企享科技租车合同》</span>的所有条例。</p>
                    </div>
                    {
                        timeSelected
                            ? <Button
                                className="submitBtn"
                            >
                                请选择租用时间
                    </Button>
                            : <Button
                                className="submitBtnActive"
                                onClick={this.handleClick.bind(this)}
                            >
                                立即预定
                    </Button>

                    }
                </CarOrderSubmit>
            </CarContainer>
        )
    }
}

export default connect(withRouter(CarOrder))