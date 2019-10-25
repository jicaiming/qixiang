import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import connect from './connect'

import { Calendar } from 'antd-mobile'

import { TimerContainer } from './styled'

class Timer extends PureComponent {
    
    componentDidMount() {
        let leftBack = document.querySelector('.left')
        let header = document.querySelector('.header')
        let back = document.createElement('span')
        header.appendChild(back)
        back.classList.add('goBack')
        let goBack = document.querySelector('.goBack')
        leftBack.remove()    
        goBack.addEventListener('click', this.handleClickBack.bind(this))
    }
    handleClickBack() {
        this.props.history.goBack()
    }
    render() {
        return (
            <TimerContainer>
                <Calendar
                    fullscreen={true}
                    visible={true}
                    defalultData = {false}
                    onConfirm = {(startTime,endTime)=>{
                        let sTime = Date.parse(startTime)
                        let eTime = Date.parse(endTime)
                        let dayCount = (Date.parse(endTime)-Date.parse(startTime))/1000/3600/24
                        let id = this.props.id
                        this.props.addTimer({sTime,eTime,dayCount,id})
                        this.props.history.goBack()
                    }}
                ></Calendar>
            </TimerContainer>

        )
    }
}

export default connect(withRouter(Timer))