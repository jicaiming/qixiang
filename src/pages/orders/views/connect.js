import {connect} from 'react-redux'
import {clearNum} from '../../category/actionCreator'



const mapStateToProps = (state) => {
    return {
      allData: state.getIn(['category', 'allData'],['time','timeList']),
      timeList:state.getIn(['time','timeList'])
    }
  }
const mapDispatchToProps = (dispatch) =>{
  return {
    clearNum(){
      dispatch(clearNum())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)