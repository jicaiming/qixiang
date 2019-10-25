import React, { Component } from 'react'

import { Tabs, WhiteSpace ,Badge} from 'antd-mobile';

import Logon from './Signin'
import Register from './Register'

import pic from '../../assets/images/pic.png'

import { HeadContent } from './StyleldIndex'

const tabs = [
    { title: <Badge >登陆</Badge> },
    { title: <Badge >注册</Badge> },
    // { title: <Badge dot>Third Tab</Badge> },
  ];
const Tab =() => (
    <div>
        <Tabs tabs={tabs}
            initialPage={1}
            // onChange={(tab, index) => { console.log('onChange', index, tab); }}
            // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
            <div >
                <Logon />
            </div>
            <div >
                <Register />
            </div>
        </Tabs>
        <WhiteSpace/>
    </div>
)

export default class Signin extends Component {
    render() {
        return (
            <>
                <HeadContent style={{backgroundImage: `url(${pic})` }}>
                </HeadContent>
                <Tab />
            </>
        )
    }
}
