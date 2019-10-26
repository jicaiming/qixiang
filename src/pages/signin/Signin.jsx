import React, { Component } from 'react'

import { SigninContent } from './StyleldIndex'

import axios from 'axios'

import {withRouter}  from 'react-router-dom'

 class Signin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

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
    render() {
        return (
            <SigninContent>
                <div className='username'>
                    <span>用户名</span> <input type="text" name="username" placeholder="请输入用户名" onChange={this.handleInputChange} value={this.state.username} />
                </div>
                <div className='pwd'>
                    <span>密码</span> <input type="text" name="password" placeholder="请输入密码" onChange={this.handleInputChange} value={this.state.password} />
                </div>
                {/* <Link to="/index/home"><p className='next'>登录</p></Link> */}
                <p className='next' onClick={this.handleClick}>登录</p>
                <p></p>
                <button >忘记密码</button>
            </SigninContent>
        )
    }


    handleClick = async() => {
        // if (this.state.username === "" || this.state.password === "") {
        //     alert('用户或密码不能为空')
        //     return false
        // } else {
        //     let mes = {
        //         username: this.state.username,
        //         password: this.state.password,
        //     }
        //     await axios("/api/login", {
        //         headers: {
        //             // 'Accept': 'application/json',
        //             // 'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         data: mes
        //     })
        //         .then(
        //             function (res) { return res }  
        //         ).then((res) => {
        //             console.log(res)
        //             if(res.data === false){
        //                 alert('用户名和密码错误')
        //             }else{
        //                 this.props.history.push('/index/home')
        //             }
                    
        //         }).catch(function (res) { console.log(res) })
        // }
        this.props.history.push('/index/home')
    }
}
export default withRouter (Signin)








