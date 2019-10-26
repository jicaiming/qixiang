import React, {createContext } from 'react'

let {
  Provider,
  Consumer: MaskConsumer
} = createContext()

class MaskProvider extends React.PureComponent {
  state = {
    nowFlower: {},
    isShowMask: false
  }
  changeStatus = (value, props) => {
    // console.log(props)
    this.setState({
      nowFlower: props ? props.value : {},
      isShowMask: value
    })
  }
  render() {
    return (
      <Provider value={{
        isShowMask: this.state.isShowMask,
        nowFlower: this.state.nowFlower,
        changeStatus: this.changeStatus
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  MaskProvider,
  MaskConsumer
}