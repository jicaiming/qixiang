import React, { Component } from 'react'

import { ProfileMessage, ProfileOrder, ProfileServe,ListItem } from './StyleProfile.js'
import userPhoto from 'images/我的/我的-头像.png'
import edit from 'images/我的/我的-编辑icon.png'

// import bianJi from 'images/ui切图/bianji.png'

// import x from 'images/ui切图/bianji.png'
// import g from 'images/ui切图/bianji.png'
// import r from 'images/ui切图/bianji.png'
// import c from 'images/ui切图/bianji.png'





export default class Profile extends Component {
    render() {
        return (
            <>
                <ProfileMessage>
                    <div>
                        <div>
                            <img src={userPhoto} alt="" />
                        </div>
                        <div>
                            <img src={edit} alt="" />
                            <div>
                                <p>guangruixiao</p>
                                <p>请添加活动区域</p>
                                <p>请添加公司信息</p>
                            </div>
                        </div>
                    </div>
                </ProfileMessage>
                <ProfileOrder>
                    <h4>我的订单</h4>
                    <div>
                        <ul>
                            <li>
                                <img src="" alt="" />
                            </li>
                            <li>haha</li>
                            <li>sssssssss</li>
                            <li>xc</li>
                        </ul>
                    </div>
                </ProfileOrder>
                <ProfileServe>
                    <h4>我的服务</h4>
                    <div>
                        <ListItem><p>关于企业</p></ListItem>
                        <ListItem><p>公告</p></ListItem>
                        <ListItem><p>设置</p></ListItem>
                    </div>
                </ProfileServe>
            </>
        )
    }
}
