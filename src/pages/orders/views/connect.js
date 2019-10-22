import {connect} from 'react-redux'
import {clearNum} from '../../category/actionCreator'
import {clearTimeList} from '../../timer/actionCreator'



const mapStateToProps = (state) => {
    return {
      allData: state.getIn(['category', 'allData']),
      timeList:state.getIn(['time','timeList'])
    }
  }
const mapDispatchToProps = (dispatch) =>{
  return {
    clearNum(){
      dispatch(clearNum())
    },
    clearTimeList (){
      dispatch(clearTimeList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)