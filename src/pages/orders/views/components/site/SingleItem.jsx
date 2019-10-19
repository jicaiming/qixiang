import React ,{PureComponent} from 'react'

import {SingleItemContainer} from './styled'

export default class SingleItem extends PureComponent{
    render(){
        return(
            <SingleItemContainer>
                <span>丰田 凯美瑞</span>
                <p className ="carContent2"><span>300</span>x<span>5</span>x<span>0</span></p>
                <p className ="carContent3"><span>0</span>元</p>
            </SingleItemContainer>
        )
    }
}
