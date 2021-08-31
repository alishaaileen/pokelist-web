import React from 'react'
import styled from '@emotion/styled'
import ChipType from './ChipType'


const FlexList = styled.div`
    display: flex;
  `

const TypeList = (props) => {
  return (
    <FlexList>
      {props.types && props.types.map((type, index) =>
        <ChipType
          key={index}
          name={type.type.name}>
        </ChipType>
      )}
    </FlexList>
  )
}

export default TypeList