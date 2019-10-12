import React, { Component } from 'react'

import { RegisterContent } from './StyleldIndex'

export default class Register extends Component {
    render() {
        return (
            <RegisterContent>
                <div className='username'>
                    <span>用户名</span> <input type="text" placeholder="7位字母或数字组合"/>
                </div>
                <div className='pwd'>
                    <span>密码</span> <input type="text" placeholder="6位字母或数字组合"/>
                </div>
                <div className='pwds'>
                    <span>确认密码</span> <input type="text" placeholder="" />
                </div>
                <div className='select'>
                    <input type="text" placeholder="选择密保问题"/>
                </div>
                <div className='ask'>
                    <input type="text"placeholder="输入密保的答案"/>
                </div>

                <p>下一步</p>
            </RegisterContent>
        )
    }
}
