import React,{PureComponent} from 'react'

import {Calendar} from 'antd-mobile'

import {TimerContainer} from './styled'

export default class Timer extends PureComponent{
    render(){
        return(
            <TimerContainer>
                <Calendar className = "calendar" fullscreen ={true} 
                    visible = {true}
                ></Calendar>
            </TimerContainer>
            
        )
    }
}