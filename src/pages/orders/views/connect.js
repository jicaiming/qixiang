import {connect} from 'react-redux'
import {clearBuylist} from '../actionCreator'



const mapStateToProps = (state) => {
    return {
      allData: state.getIn(['category', 'allData'],['order','timeList'])
    }
  }
const mapDispatchToProps = (dispatch) =>{
  return {
    clearBuylist(){
      dispatch(clearBuylist())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)