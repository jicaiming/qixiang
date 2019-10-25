import React, { Component } from 'react'

import {SigninContent} from './StyleldIndex'

export default class Signin extends Component {
    render() {
        return (
            <SigninContent>
                <div className='username'>
                    <span>用户名</span> <input type="text" placeholder="7位字母或数字组合"/>
                </div>
                <div className='pwd'>
                    <span>密码</span> <input type="text" placeholder="6位字母或数字组合"/>
                </div>
                <p className='next'>下一步</p>
                <p></p>
                <button>忘记密码</button>
            </SigninContent>

        )
    }
}
