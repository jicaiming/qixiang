import { connect } from 'react-redux'

import { increaseNum, decreaseNum, clearNum } from '../actionCreator'

const mapStateToProps = (state) => {
  
  return {
    buyList: state.getIn(['category', 'allData', 'buyList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseNum(id) {
      dispatch(increaseNum(id))
    },
    decreaseNum(id) {
      dispatch(decreaseNum(id))
    },
    clearNum() {
      dispatch(clearNum())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)