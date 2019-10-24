import React, { Component } from 'react'

import http from 'utils/xgrhttp'

import Header from 'components/profile/Header'
import MyButton from 'components/profile/Button'

import { EditContainer, AddImgContainer, UserContainer, RadioContainer, CityContainer } from './StyleEdit'

import { List, ImagePicker, Radio, Picker, InputItem } from 'antd-mobile';

import cities from './city.json'

const sex = [
    { value: '男', label: '男' },
    { value: '女', label: '女' },
];

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
            url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
            id: '0',
        }],
        username: 'guangruixiao',
        sex: '男',
        address: ['北京市', '北京市', '海淀区'],
        company: '上海王聪明有限公司'
    }
    async componentDidMount() {
        let result = (await http.post1({
            url: '/api/findUserMsg',
            data: {
                uid: 1
            }
        })).data
        this.setState({
            pic: result.pic ? [{
                url: result.pic,
                id: '0',
            }] : [],
            username: result.username,
            sex: result.sex,
            address: result.address.split[''],
            company: result.company
        },()=>{
            // console.log(this.state)
        })
        // console.log(result.username)

        let hah = (await http.post1({
            url: '/api/register',
            data: {
                username: 1,
                password:2,
                
            }
        })).data
        console.log(hah)
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
                        onChange={v => this.setState({ username: v })}
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
        let result = await http.post2({
            url: '/api/saveuser',
            data: {
                uid: '1',
                ...this.state
            }
        })
        // console.log(result)
        // console.log(this.state)
        // let haha = await http.get({url:''})
    }
}