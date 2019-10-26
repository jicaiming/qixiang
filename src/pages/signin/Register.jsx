import React, { Component } from 'react'

import { RegisterContent } from './StyleldIndex'
// import { sign } from 'crypto';
// import Signin from './Signin';
import axios from 'axios'

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            repassword: '',
            question: '',
            ask: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.log(value)
        this.setState({
            [name]: value
        });
    }
    handleBlur(e){
        this.setState({
            username:e.target.value
        })
        axios({
            url:'/api/registerusername',
            method:'post',
            data:this.state.username
        }).then(res=>{
            // console.log(res.data)
            // if(res.data === false)
            // {alert('用户名重复')}
            // if(res.data === true)
            // {alert('用户名输入成功')}
        })
    }
    handleSend(e) {
        if(this.state.question.length !== 11) return ''
        console.log(this.state.question)
        axios({
            url: `http://39.107.252.189:8080/api/faduanxin?iphone=${this.state.question}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(){
            alert('验证码发送成功')
        })
    }
    handleV(e) {
        console.log(this.state)
    }

    render() {
        const bck1 = { background: '#9b9b9b' }
        // const bck2 = { background:'green'}
        return (
            <RegisterContent>
                <div className='username' onBlur ={(e)=>{
                    this.handleBlur(e)
                }}>
                    <span>用户名</span> <input type="text" name="username" placeholder="请输入用户名" onChange={this.handleInputChange} value={this.state.username}
                    />
                </div>
                <div className='pwd'>
                    <span>密码</span> <input type="text" name="password" placeholder="请输入密码" value={this.state.password}
                        onChange={this.handleInputChange} />
                </div>
                <div className='pwds'>
                    <span>确认密码</span> <input type="text" name="repassword" placeholder="" value={this.state.repassword}
                        onChange={this.handleInputChange} />
                </div>
                {/* <div className='select'>
                    <input type="text" placeholder="选择密保问题" name="question" ref={this.input} value={this.state.question}
                        onChange={this.handleInputChange} />
                </div>
                <div className='ask'>
                    <input type="text" placeholder="输入密保的答案" name="ask" value={this.state.ask}
                        onChange={this.handleInputChange} />
                </div> */}
                <div className='select'>
                    <input type="text" placeholder="请输入手机号" name="question" ref={this.input} value={this.state.question}
                        onChange={this.handleInputChange} />
                    <button className='getV' onClick={(e)=>this.handleSend(e)}>获取验证码</button>
                </div>
                <div className='ask'>
                    <input type="text" placeholder="请输入验证码" name="ask" value={this.state.ask}
                        onChange={this.handleInputChange} />
                </div>
                {/* <input type="submit" value="Submit" /> */}
                <p onClick={(e)=>this.handleV(e)} style={bck1}>注册</p>

            </RegisterContent>
        )
    }
    handleClick = async () => {
        if (this.state.username === "") {
            return 
        } else if (this.state.password === "") {
            return
        } else if (this.state.repassword === "") {
            return
        } else if (this.state.question === "") {
            return 
        } else if (this.state.ask === "") {
            return
        } else {
            // console.log(this)    

            // let mes = {
            //     username: this.state.username,
            //     password: this.state.password,
            //     question: this.state.question,
            //     ask: this.state.ask
            // }
            // await axios({
            //     url: "/api/register",
            //     headers: {
            //         // 'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     method: "POST",
            //     data: mes
            //     // body: JSON.stringify(mes)
            // })
            //     .then(
            //         function (res) { return res }
            //     ).then((res) => {
            //         if(res.data === true){
            //             alert('注册成功')
            //         }
            //     }).catch(function (res) { console.log(res) })

            this.props.history.push("/login")
        }
    }

}
