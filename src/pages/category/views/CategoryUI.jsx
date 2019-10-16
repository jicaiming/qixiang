import React from 'react'

import PrimaryClassification from './components/PrimaryClassification/PrimaryClassification'
import SubClassification from './components/SubClassification/SubClassification'
import GoodsList from './components/GoodsList/GoodsList'
import TimeBtn from './components/TimeBtn/TimeBtn'
import Mask from './components/Mask/Mask'

import { MaskProvider } from './context/MaskContext'

export default (props) => {
  let bigKind = props.location.pathname.split('/')[3]
  // console.log(bigKind)
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
        bigKind === 'site' ? '' : <TimeBtn></TimeBtn>
      }
      <Mask></Mask>
    </MaskProvider>
  )
}
