import React,{Component} from 'react'
import Timer from './TimerUI'
import {withRouter} from 'react-router-dom'

import connect from './connect'



class Time extends Component {
    render(){
        return(
            <Timer id= {this.props.location.state.id}></Timer>
        )
    }
}
export default connect(withRouter(Time))