import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { color } from '../constants/style'

const ListWrapper = styled.div`
  max-height: 300px;
  overflow-y: scroll;
`
const ListRow = styled.div`
  background-color: ${color.white};
  width: auto;
  padding: 10px;
  border-bottom: 2px solid ${color.grey};
`

export const List = ({ data, property }) => {
  return (
    <ListWrapper>
      <div>
        {data && data.map((singleData, index) =>
          <ListRow key={index}>
            <p className="my-0 capitalize">
              {index+1}. { singleData[`${property}`] }
            </p>
          </ListRow>
        )}
      </div>
    </ListWrapper>
  )
}

export default List