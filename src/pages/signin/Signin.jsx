import React, { Component } from 'react'

import { SigninContent } from './StyleldIndex'

export default class Signin extends Component {
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
                    <span>用户名</span> <input type="text" name="username" placeholder="7位字母或数字组合" onChange={this.handleInputChange} value={this.state.username} />
                </div>
                <div className='pwd'>
                    <span>密码</span> <input type="text" name="password" placeholder="7位字母或数字组合" onChange={this.handleInputChange} value={this.state.password} />
                </div>
                {/* <Link to="/index/home"><p className='next'>登录</p></Link> */}
                <p className='next' onClick={this.handleClick}>登录</p>
                <p></p>
                <button >忘记密码</button>


            </SigninContent>

        )
    }


    handleClick() {
        if (this.state.username === "" || this.state.password === "") {
            alert('用户或密码不能为空')
            return false
        } else {
            let mes = {
                username: this.state.username,
                password: this.state.password,
            }
            fetch("/api/login", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(mes)
            })
                .then(
                    function (res) { return res.json() }
                ).then((res) => {
                    console.log(res)
                }).catch(function (res) { console.log(res) })
            
        }
    }
}









