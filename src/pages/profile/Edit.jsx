import React, { Component } from 'react'


import { EditContainer, AddImgContainer, RadioContainer, UserContainer, CityContainer } from './StyleEdit'
import Header from './components/Header'

import { List, Radio, Picker, InputItem } from 'antd-mobile';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}];

export default class Edit extends Component {
    onChange = (value) => {
        console.log('checkbox');
        this.setState({
            value,
        });
    };

    state = {
        value: 0,
        files: data,
        selectable: true,
        userValue: 'wyp2259',
        provinceValue: ['02', '02-1', '02-1-1'],
        companyValue:'上海王聪明有限公司'
    }
    // onChange = (files, type, index) => {
    //     console.log(files, type, index);
    //     this.setState({
    //         files,
    //     });
    // }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
            multiple: index === 1,
        });
    }

    render() {
        const { files } = this.state;
        const { value } = this.state;
        const data = [
            { value: 0, label: '男' },
            { value: 1, label: '女' },
        ];

        const province = [
            {
                label: '北京',
                value: '01',
                children: [
                    {
                        label: '东城区',
                        value: '01-1',
                    },
                    {
                        label: '西城区',
                        value: '01-2',
                    },
                    {
                        label: '崇文区',
                        value: '01-3',
                    },
                    {
                        label: '宣武区',
                        value: '01-4',
                    },
                ],
            },
            {
                label: '浙江',
                value: '02',
                children: [
                    {
                        label: '杭州',
                        value: '02-1',
                        children: [
                            {
                                label: '西湖区',
                                value: '02-1-1',
                            },
                            {
                                label: '上城区',
                                value: '02-1-2',
                            },
                            {
                                label: '江干区',
                                value: '02-1-3',
                            },
                            {
                                label: '下城区',
                                value: '02-1-4',
                            },
                        ],
                    },
                    {
                        label: '宁波',
                        value: '02-2',
                        children: [
                            {
                                label: 'xx区',
                                value: '02-2-1',
                            },
                            {
                                label: 'yy区',
                                value: '02-2-2',
                            },
                        ],
                    },
                    {
                        label: '温州',
                        value: '02-3',
                    },
                    {
                        label: '嘉兴',
                        value: '02-4',
                    },
                    {
                        label: '湖州',
                        value: '02-5',
                    },
                    {
                        label: '绍兴',
                        value: '02-6',
                    },
                ],
            },
        ];
        return (
            <EditContainer>
                <Header msg="个人设置"></Header>
                <form >
                    {/*action='/' method="post" enctype="multipart/form-data" */}
                    <AddImgContainer>
                        <span>
                            头像
                        </span>
                        <span>
                            ha'ha
                        </span>
                        {/* <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 7}
                            selectable={this.state.selectable}
                            disableDelete='ture'
                        /> */}
                    </AddImgContainer>
                    <UserContainer>
                        <InputItem
                            defaultValue={this.state.userValue}
                            placeholder="请输入用户名"
                            data-seed="logId"
                        >用户名</InputItem>
                    </UserContainer>
                    <AddImgContainer>
                        <span>
                            性别
                        </span>
                        <RadioContainer>
                            {data.map(i => (
                                <Radio className="my-radio" key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                                    {i.label}
                                </Radio>
                            ))}
                        </RadioContainer>
                    </AddImgContainer>
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
                        >公司</InputItem>
                    </UserContainer>
                </form>
            </EditContainer>
        )
    }
}
