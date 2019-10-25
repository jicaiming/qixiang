import {addTimeList} from '../actionCreator'
import {connect} from 'react-redux'

const mapStateToProps = (state)=>{
    return {
        timeList: state.getIn(['time', 'timeList'])
      }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addTimer(sTime,eTime,dayCount,id){
        dispatch(addTimeList(sTime,eTime,dayCount,id))
    }}
}

export default connect(mapStateToProps,mapDispatchToProps)