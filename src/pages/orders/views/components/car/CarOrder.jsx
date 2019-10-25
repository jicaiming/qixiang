import React, { PureComponent } from 'react'
import { Button, Switch, Checkbox } from 'antd-mobile'
import BScroll from 'better-scroll'
import { withRouter } from 'react-router-dom'
import { CarContainer, CarOrderItem, Devide, CarOrderDetail, CarOrderSubmit, ItemContainer, ServiceFee } from './styled'

import CarItem from './CarItem'
import CarSingleOrder from './CarSingleOrder'
import connect from '../../connect'
<<<<<<< HEAD
import http from 'utils/http'
=======
import axios from 'axios' 
>>>>>>> guangruixiao


class CarOrder extends PureComponent {
    constructor() {
        super()
        this.state = {
            isChecked: true,
<<<<<<< HEAD
            isSwitch: false,
            totalCost : 0
=======
            isSwitch: false
>>>>>>> guangruixiao
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
<<<<<<< HEAD
        


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
        console.log(timeList)
        timeList.map((value,index)=>{
            let startDate1 = new Date(value.startDate)
            let createYear = startDate1.getFullYear()
            let createMonth = startDate1.getMonth()
            let startDate = startDate1.getDate()
            value.startDate = createYear+'-'+createMonth+'-'+startDate
            let endDate1 = new Date(value.endDate)
            let endYear = endDate1.getFullYear()
            let endMonth = endDate1.getMonth()
            let endDate = endDate1.getDate()
            value.endDate = endYear+'-'+endMonth+'-'+endDate
        })
        // timeList.map((value,index)=>{
        //     // delete value.startDate 
        //     // delete value.endDate
        //     value.startDate = value.startDate.toString()
        //     value.endDate = value.endDate.toString()
        // })
        console.log(timeList)
        let serviceFee = total*50
=======
        let timeList = this.props.timeList
        let serviceFee = total*50
        let orderType = this.props.match.params.type
>>>>>>> guangruixiao
        cartList.map((value,index)=>{
            timeList.map((v,i)=>{
                if(v.id === value.id){
                    value = Object.assign(value,v)
                }
            })
        })
<<<<<<< HEAD
        cartList.forEach((value,index)=>{
            if(value.dayCount === 0){
                cartList.splice(1,index)
            }
        })
       
        let data = {
            uid: 1,
            orderId:orderId ,
            cartList:JSON.stringify(cartList),
            isHasServiceFee :serviceFee,
            orderAmount: this.state.totalCost
=======
        let totalCost = 0
        cartList.forEach((value, index) => {
            timeList.forEach((v, i) => {
                if (value.id === v.id) {
                    totalCost += value.price * value.count * v.dayCount
                }
            })
        })
        if (this.state.isSwitch === true) {
            totalCost += total * 50
        }
        let data = {
            orderID:orderId ,
            isHasServiceFee :serviceFee,
            cartList : cartList,
            orderAmount: totalCost,
            orderType: orderType
>>>>>>> guangruixiao
        }
        if (this.state.isChecked === true) {
            this.props.clearNum()
            this.props.clearTimeList()
<<<<<<< HEAD
            this.props.history.goBack()
        }
        console.log(data)
        // http.http({
        //     method:'post',
        //     url:'/api/commitOrder',
        //     data:data,
        // })
        http.post({
                method:'post',
                url:'/api/commitOrder',
                data:data,
            })
=======
        }
        console.log(data)
        
        axios({
            method: 'post',
            url: '/api/commitOrder',
            params:data
        }).then(res => {
            console.log(res.data)
        })
        // axios.post('/api/commitOrder',data).then(function(res){
        //     console.log(res)
        // })
>>>>>>> guangruixiao
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
<<<<<<< HEAD
        let { buyList, total } = this.props.allData
        let timeList = this.props.timeList
        console.log(timeList)
        let totalFee = 0
        buyList.forEach((value, index) => {
            timeList.forEach((v, i) => {
                if (value.id === v.id) {
                    totalFee += value.price * value.count * v.dayCount
=======
        console.log(this.props)
        let { buyList, total } = this.props.allData
        let timeList = this.props.timeList
        let totalCost = 0
        buyList.forEach((value, index) => {
            timeList.forEach((v, i) => {
                if (value.id === v.id) {
                    totalCost += value.price * value.count * v.dayCount
>>>>>>> guangruixiao
                }
            })
        })
        if (this.state.isSwitch === true) {
<<<<<<< HEAD
            totalFee += total * 50
            
        }
        this.setState({totalCost : totalFee})
=======
            totalCost += total * 50
        }
>>>>>>> guangruixiao
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
<<<<<<< HEAD
                                        <span className="issue" ></span>
=======
                                        <span className="issue"></span>
>>>>>>> guangruixiao
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
<<<<<<< HEAD
                        <div><span>{this.state.totalCost}</span>元</div>
=======
                        <div><span>{totalCost}</span>元</div>
>>>>>>> guangruixiao
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
<<<<<<< HEAD
=======


// {
//     orderId :xxx,
//     cartList:[
//         {
//             goodsId:xxx, 商品id
//             startTime:xxx,  开始时间
//             endTime:xxx,  结束时间
//             dayCount:xxx,  租用天数
//             totalCost:xxx   该商品的费用  就是天数*该商品的单价*选购数量
//         },
//         {

//         }
//     ],
//     totalcost, 该订单的总费用 
//     isHasServiceFee:true, 是否含有服务费
// }
>>>>>>> guangruixiao
