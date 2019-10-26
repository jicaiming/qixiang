import React, {Component } from 'react'

import img1 from 'assets/images/start/启动页.jpg'

export default class Start extends Component {
  componentDidMount() {
    // console.log(this.props)
    setTimeout(()=>{
      this.props.history.push('./guide')
    }, 1000)
  }
  render() {
    return (
      <>
        <img 
          src={img1} 
          alt=""
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </>
    )
  }
}