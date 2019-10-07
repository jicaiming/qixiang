import React, { PureComponent } from 'react'

import { Container , Main , Footer } from './index_css'

import { Route , NavLink } from 'react-router-dom'

import './index.css'

import Home from './home/Home'
import Category from './category/Category'
import Message from './message/Message'
import Profile from './profile/Profile'


export default class Index extends PureComponent {
    render() {
        let { match } = this.props
        return (
            <Container>
                <header>
                    
                </header>
                <Main>
                    <Route path={`${match.path}/home`} component={Home} ></Route>
                    <Route path={`${match.path}/category`} component={Category} ></Route>
                    <Route path={`${match.path}/message`} component={Message} ></Route>
                    <Route path={`${match.path}/profile`} component={Profile} ></Route>
                </Main>
                <Footer>
                    <NavLink className='normal' to={`${match.path}/home`}>
                        <div className={this.props.location.pathname==='/index/home' ? "home" : "home_active"}>首页</div>
                    </NavLink>
                    <NavLink className='normal' to={`${match.path}/category`}>
                        <div className={this.props.location.pathname==='/index/category' ? "category" : "category_active"}>分类</div>
                    </NavLink>
                    <NavLink className='normal' to={`${match.path}/message`}>
                        <div className={this.props.location.pathname==='/index/message' ? "message" : "message_active"}>消息</div>
                    </NavLink>
                    <NavLink className='normal' to={`${match.path}/profile`}>
                        <div className={this.props.location.pathname==='/index/profile' ? "profile" : "profile_active"}>我的</div>
                    </NavLink>
                </Footer>
            </Container>  
        )
    }
}
