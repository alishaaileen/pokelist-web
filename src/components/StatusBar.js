import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'

const ContextWrapper = styled.div`
  margin: 16px auto;

  label {
    display: flex;
    justify-content: space-between;
  }
  .meter { 
    height: 10px;  <em>/* Can be anything */</em>
    position: relative;
    background: #555;
    border-radius: 25px;
    padding: 8px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
}
  .meter > span {
    display: block;
    height: 100%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: rgb(43,194,83);
    background-image: linear-gradient(
      center bottom,
      rgb(43,194,83) 37%,
      rgb(84,240,84) 69%
    );
    box-shadow: 
      inset 0 2px 5px  rgba(255,255,255,0.3),
      inset 0 -2px 6px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
  }
`

const StatusBar = ({ statName, points }) => {
  return (
    <>
      <ContextWrapper>
        <label>
          <span className="capitalize">{statName}</span>
          <span>{points}</span>
        </label>
        
        <div className="meter">
          <span className={css`width: ${points}%`}></span>
        </div>
      </ContextWrapper>
    </>
  )
}

export default StatusBar