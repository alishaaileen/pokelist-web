import React from 'react'
import styled from '@emotion/styled'

const Chip = styled.div`
    background-color: #f5f5f5;
    border-radius: 100px;
    width: auto;
    padding: 5px 10px;
    margin: 5px;
  `

export const ChipMove = (props) => {
  return (
    <Chip>
      <span>
        { props.name }
      </span>
    </Chip>
  )
}

export default ChipMove