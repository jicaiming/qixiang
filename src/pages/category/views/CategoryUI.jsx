import React from 'react'

import PrimaryClassification from './components/PrimaryClassification'
import SubClassification from './components/SubClassification'
import GoodsList from './components/GoodsList'
import TimeBtn from './components/TimeBtn'

export default (props) => {
  console.log(props)
  let bigKind = props.location.pathname.split('/')[3]
  // console.log(bigKind)
  return (
    <>
      <PrimaryClassification
        bigKind={bigKind}
      ></PrimaryClassification>
      <SubClassification></SubClassification>
      <GoodsList></GoodsList>
      <TimeBtn></TimeBtn>
    </>
  )
}