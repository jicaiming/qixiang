import React, { Component } from 'react'

import Header from 'components/profile/Header'
import MyButton from 'components/profile/Button'

import { EditContainer, AddImgContainer, UserContainer, RadioContainer, CityContainer } from './StyleEdit'

import { List, ImagePicker, Radio, Picker, InputItem } from 'antd-mobile';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '0',
}];

export default class Edit extends Component {
    state = {
        files: data,
        userValue: 'wyp2259',
        sexValue: '男',
        provinceValue: ['浙江', '杭州', '西湖区'],
        companyValue: '上海王聪明有限公司'
    }
    render() {
        const data = [
            { value: '男', label: '男' },
            { value: '女', label: '女' },
        ];
        const province = [
            {
                label: '北京',
                value: '北京',
                children: [
                    {
                        label: '北京市',
                        value: '北京市',
                        children: [
                            {
                                label: '东城区',
                                value: '东城区',
                            },
                            {
                                label: '西城区',
                                value: '西城区',
                            },
                            {
                                label: '崇文区',
                                value: '崇文区',
                            },
                            {
                                label: '宣武区',
                                value: '宣武区',
                            },
                        ],
                    }
                ],
            },
            {
                label: '浙江',
                value: '浙江',
                children: [
                    {
                        label: '杭州',
                        value: '杭州',
                        children: [
                            {
                                label: '西湖区',
                                value: '西湖区',
                            },
                            {
                                label: '上城区',
                                value: '上城区',
                            },
                            {
                                label: '江干区',
                                value: '江干区',
                            },
                            {
                                label: '下城区',
                                value: '下城区',
                            },
                        ],
                    },
                    {
                        label: '宁波',
                        value: '宁波',
                        children: [
                            {
                                label: 'xx区',
                                value: 'xx区',
                            },
                            {
                                label: 'yy区',
                                value: 'yy区',
                            },
                        ],
                    },
                    {
                        label: '温州',
                        value: '温州',
                    },
                    {
                        label: '嘉兴',
                        value: '嘉兴',
                    },
                    {
                        label: '湖州',
                        value: '湖州',
                    },
                    {
                        label: '绍兴',
                        value: '绍兴',
                    },
                ],
            },
        ];
        return (
            <EditContainer>
                <Header msg="个人设置" handleClick={this.handleClickback}></Header>
                <AddImgContainer>
                    <span>
                        头像
                        </span>
                    <ImagePicker
                        files={this.state.files}
                        onChange={this.onChangeImg}
                        selectable={this.state.files.length < 1}
                        length='1'
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                    />
                </AddImgContainer>
                <UserContainer>
                    <InputItem
                        defaultValue={this.state.userValue}
                        placeholder="请输入用户名"
                        data-seed="logId"
                        clear="ture"
                        onBlur={v => this.setState({ userValue: v })}
                    >用户名</InputItem>
                </UserContainer>
                <RadioContainer>
                    <span>
                        性别
                        </span>
                    <div>
                        {data.map(i => (
                            <Radio className="my-radio" key={i.value} checked={this.state.sexValue === i.value} onChange={() => this.onChangeSex(i.value)}>
                                {i.label}
                            </Radio>
                        ))}
                    </div>
                </RadioContainer>
                <CityContainer>
                    <Picker extra="请选择(可选)"
                        data={province}
                        title="请选择城市"
                        value={this.state.provinceValue}
                        onChange={v => this.setState({ provinceValue: v })}
                    >
                        <List.Item arrow="horizontal">活动范围</List.Item>
                    </Picker>
                </CityContainer>
                <UserContainer>
                    <InputItem
                        defaultValue={this.state.companyValue}
                        placeholder="请输入所在公司名"
                        data-seed="logId"
                        clear="ture"
                        onBlur={v => this.setState({ companyValue: v })}
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
    onChangeImg = (files, type, index) => {
        this.setState({
            files,
        });
    }
    onChangeSex = (value) => {
        this.setState({
            sexValue: value,
        });
    };
    onSubmit = () => {
        console.log(this.state)
    }
}
