import React from 'react'

import PrimaryClassification from './components/PrimaryClassification'
import SubClassification from './components/SubClassification'
import GoodsList from './components/GoodsList'
import TimeBtn from './components/TimeBtn'

export default (props) => {
  return (
    <>
      <PrimaryClassification></PrimaryClassification>
      <SubClassification></SubClassification>
      <GoodsList></GoodsList>
      <TimeBtn></TimeBtn>
    </>
  )
}