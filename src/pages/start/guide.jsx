import React, {Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

import img1 from 'assets/images/start/引导页1.png'
import img2 from 'assets/images/start/引导页2.png'
import img3 from 'assets/images/start/引导页3.png'

export default class Start extends Component {
  constructor() {
    super()
    this.toSignup = this.toSignup.bind(this)
  }
  state = {
    data: [
      img1,
      img2, 
      img3
    ]
  }
  toSignup(from, to) {
    // console.log(this)
    // console.log(`slide from ${from} to ${to}`)
    if(from === 2 && to == 0) {
      this.props.history.push('/register')
    }
  }
  render() {
    return (
      <WingBlank
        style={{
          margin: 0
        }}
      >
        <Carousel
          autoplay={false}
          dots={false}
          infinite
          beforeChange={this.toSignup}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: '100%' }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    )
  }
}