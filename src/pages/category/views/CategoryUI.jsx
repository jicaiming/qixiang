import React from 'react'

import PrimaryClassification from './components/PrimaryClassification'
import SubClassification from './components/SubClassification'
import GoodsItem from './components/GoodsItem'

export default (props) => {
  return (
    <>
      <PrimaryClassification></PrimaryClassification>
      <SubClassification></SubClassification>
      <GoodsItem></GoodsItem>
      <GoodsItem></GoodsItem>
    </>
  )
}