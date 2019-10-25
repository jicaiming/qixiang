import React, {createContext } from 'react'

let {
  Provider,
  Consumer: MaskConsumer
} = createContext()

class MaskProvider extends React.PureComponent {
  state = {
    isShowMask: false
  }
  changeStatus = (value) => {
    this.setState({
      isShowMask: value
    })
  }
  render() {
    return (
      <Provider value={{
        isShowMask: this.state.isShowMask,
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