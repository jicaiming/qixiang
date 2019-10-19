import React ,{PureComponent} from 'react'

import {SingleItemContainer} from './styled'

export default class SingleItem extends PureComponent{
    render(){
        return(
            <SingleItemContainer>
                <span>丰田 凯美瑞</span>
                <p className ="carContent2"><span>300</span>x<span>{this.props.value.count}</span>x<span>0</span></p>
                <p className ="carContent3"><span>{300*this.props.value.count*0}</span>元</p>
            </SingleItemContainer>
        )
    }
}
