import {connect} from 'react-redux'
import {clearBuylist} from '../actionCreator'



const mapStateToProps = (state) => {
    return {
      buyList: state.getIn(['category', 'buyList'])
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