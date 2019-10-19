import React from 'react'

import PrimaryClassification from './components/PrimaryClassification/PrimaryClassification'
import SubClassification from './components/SubClassification/SubClassification'
import GoodsList from './components/GoodsList/GoodsList'
import TimeBtn from './components/TimeBtn/TimeBtn'
import TimeBtnActive from './components/TimeBtn/TimeBtnActive'
import Mask from './components/Mask/Mask'

import { MaskProvider } from './context/MaskContext'
import connect from './connect'

export default connect((props) => {
  let bigKind = props.location.pathname.split('/')[3]
  // console.log(bigKind)
  // console.log(props)
  let hasGoods = false
  if (props.buyList.length !== 0) {
    hasGoods = true
  } 
  return (
    <MaskProvider>
      <PrimaryClassification
        bigKind={bigKind}
      ></PrimaryClassification>
      <SubClassification
        bigKind={bigKind}
        defaultSecondClass="1"
      ></SubClassification>
      <GoodsList
        bigKind={bigKind}
      ></GoodsList>
      {
        bigKind === 'site' ? '' : (
          hasGoods 
            ? <TimeBtnActive></TimeBtnActive> 
            : <TimeBtn></TimeBtn>
        )
      }
      <Mask></Mask>
    </MaskProvider>
  )
})
