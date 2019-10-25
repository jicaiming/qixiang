import React, { Component } from 'react'

import http from 'utils/xgrhttp'

import Header from 'components/profile/Header'
import MyButton from 'components/profile/Button'

import { EditContainer, AddImgContainer, UserContainer, RadioContainer, CityContainer } from './StyleEdit'

import { List, ImagePicker, Radio, Picker, InputItem, Toast } from 'antd-mobile';

import cities from './city.json'

import userPhoto from 'images/我的/我的-头像.png'

const sex = [
    { value: '男', label: '男' },
    { value: '女', label: '女' },
];

let hasError = false

const province = cities.map((value) => {
    return {
        label: value.Name,
        value: value.Name,
        children: value.Citys.map((value) => {
            return {
                label: value.Name,
                value: value.Name,
                children: value.Areas.map((value) => {
                    return {
                        label: value.Name,
                        value: value.Name,
                    }
                })
            }

        })
    }
})

export default class Edit extends Component {
    state = {
        pic: [{
            url: userPhoto,
            id: '0',
        }],
        username: '',
        sex: '男',
        address: '',
        company: '',
        // hasError: true
    }

    render() {
        return (
            <EditContainer>
                <Header msg="个人设置" handleClick={this.handleClickback}></Header>
                <AddImgContainer>
                    <span>
                        头像
                        </span>
                    <ImagePicker
                        files={this.state.pic}
                        onChange={this.onChangeImg}
                        selectable={this.state.pic.length < 1}
                        length='1'
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                    />
                </AddImgContainer>
                <UserContainer>
                    <InputItem
                        value={this.state.username}
                        placeholder="请输入用户名"
                        data-seed="logId"
                        clear="true"
                        onChange={this.onChangeUserName}
                        error={hasError}
                        onErrorClick={() => {
                            if (hasError) {
                                Toast.info('用户名不能为空');
                            }
                        }}
                    >用户名</InputItem>
                </UserContainer>
                <RadioContainer>
                    <span>性别</span>
                    <div>
                        {sex.map(i => (
                            <Radio className="my-radio" key={i.value} checked={this.state.sex === i.value} onChange={() => this.onChangeSex(i.value)}>
                                {i.label}
                            </Radio>
                        ))}
                    </div>
                </RadioContainer>
                <CityContainer>
                    <Picker
                        extra="请选择(可选)"
                        data={province}
                        title="请选择城市"
                        value={this.state.address}
                        onChange={v => this.setState({ address: v })}
                    >
                        <List.Item arrow="horizontal">活动范围</List.Item>
                    </Picker>
                </CityContainer>
                <UserContainer>
                    <InputItem
                        value={this.state.company}

                        placeholder="请输入所在公司名"
                        data-seed="logId"
                        clear="ture"
                        onChange={v => this.setState({ company: v })}
                    >公司</InputItem>
                </UserContainer>
                <div style={{ height: '0.13rem', background: '#F3F3F3' }}></div>
                <MyButton msg='确认' onClick={this.onSubmit}></MyButton>
            </EditContainer>
        )
    }
    handleClickback() {
        //定义函数传给子组件，不能再使用this.props.history;不懂的话解开this打印一遍
        // console.log(this)
        this.history.goBack()
    }
    onChangeUserName = (v) => {
        console.log(hasError)
        if (v == '') {
            hasError = true
        } else {
            hasError = false
        }
        this.setState({ username: v })
    }
    onChangeImg = (pic, type, index) => {
        this.setState({
            pic,
        });
    }
    onChangeSex = (value) => {
        this.setState({
            sex: value,
        });
    };
    onSubmit = async () => {
        if (hasError) {
            Toast.info('用户名不能为空');
            // alert('用户名不能为空')
        } else {
            console.log({
                uid: '1',
                ...this.state,
                pic: this.state.pic.length == 0 ? '' : this.state.pic[0].url,
                address: this.state.address ? this.state.address.toString() : null,
            })
            let result = await http.post2({
                url: 'http://39.107.252.189:8080/api/saveuser',
                data: {
                    uid: '1',
                    ...this.state,
                    pic: this.state.pic.length == 0 ? '' : this.state.pic[0].url,
                    address: this.state.address ? this.state.address.toString() : null,
                }
            })
            // alert('修改成功')            
        }

    }
    async componentDidMount() {
        let result = (await http.post1({
            url: 'http://39.107.252.189:8080/api/findUserMsg',
            data: {
                uid: 1
            }
        })).data
        // console.log(result.address.split(' ').slice(0, -1))
        this.setState({
            pic: result.pic ? [{
                url: result.pic,
                id: '0',
            }] : [{
                url: userPhoto,
                id: '0',
            }],
            username: result.username,
            sex: result.sex,
            address: result.address.split(' ').slice(0, -1),
            company: result.company
        }, () => {
            // console.log(this.state)
        })
        // console.log(result.username)
    }

}