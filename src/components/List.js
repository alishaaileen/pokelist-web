import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { color } from '../constants/style'

const ListRow = styled.div`
  background-color: ${color.white};
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid ${color.grey};
`
const ListWrapper = styled.div`
  max-height: 300px;
  overflow-y: scroll;
`

export const List = ({ data, property }) => {
  useEffect(() => console.log(data), [])
  return (
    <ListWrapper>
      <div className="display-flex">
        {data && data.map((singleData, index) =>
          <ListRow key={index}>
            <p className="my-0">
              { singleData[`${property}`] }
            </p>
          </ListRow>
        )}
      </div>
    </ListWrapper>
  )
}

export default List