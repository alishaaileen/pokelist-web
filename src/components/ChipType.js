import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'

import { TYPES } from '../constants'

const Chip = styled.div`
    border-radius: 100px;
    width: auto;
    color: #f5f5f5;
    padding: 5px 10px;
    margin: 0 5px;
  `
const setBgColor = (typeName) => {
  const matchedType = TYPES.find(type => type.name === typeName)

  return `background-color: ${matchedType ? matchedType.color : '#d5d5d5'}`
}
  
export const ChipType = (props) => {
  return (
    <Chip className={css`${setBgColor(props.name)}`}>
      <span>
        { props.name }
      </span>
    </Chip>
  )
}

export default ChipType