import React,{Component} from 'react'

import OrderUI from './OrderUI'


export default class Order extends Component{
    
    render(){
        return (
            <OrderUI></OrderUI>
        )
    }
}







// @connect
// class Order extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count : 0
//         }
//         let {location,history,match} = this.props
//     }
    

//     render(){
        
//     }
// }
// export default withRouter(Order)