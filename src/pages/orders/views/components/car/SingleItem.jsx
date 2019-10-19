import React ,{PureComponent} from 'react'

import {SingleItemContainer} from './styled'

export default class SingleItem extends PureComponent{
    render(){
        return(
            <SingleItemContainer>
                <span>{this.props.value.name}</span>
                <p className ="carContent2"><span>{this.props.value.price}</span>x<span>{this.props.value.count}</span>x<span>0</span></p>
                <p className ="carContent3"><span>{this.props.value.price*300*this.props.value.count*0}</span>元</p>
            </SingleItemContainer>
        )
    }
}
