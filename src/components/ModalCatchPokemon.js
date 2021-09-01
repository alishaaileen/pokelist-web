import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import Button from './Button'
import { color } from '../constants/style'
import { css } from '@emotion/css'
import { lightenDarkenColor } from '../utils'
import { mq } from '../assets/styling/breakpoints'

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`
const Overlay = styled.div`
  background-color: #00000099;
  width: 100%;
  height: 100%;
  position: fixed;
`
const Modal = styled.div`
  width: 100%;
  height: 80vh;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;

  ${mq('s')} {
    align-self: center;
    height: auto;
    border-radius: 10px;
    width: 50%;
    height: 50vh;
    padding: 32px 24px;
  }
`
const Input = styled.input`
  height: 32px;
  padding: 2px 6px;
  text-align: center;
  background-color: ${color.grey};
  border: 2px solid ${lightenDarkenColor(color.grey, -20)};
  font-size: 16px;
`

const ModalCatchPokemon = ({closeModal, isCaptured, pokemon, saveCatchedPokemon, capturedPokemons}) => {
  const [nickname, setNickname] = useState('')
  const [inputErrorMsg, setInputErrorMsg] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    if(nickname == '') {
      setInputErrorMsg('Nickname should not be empty')
      return
    }
    if(capturedPokemons.find(pokemon => pokemon.nickname.toLowerCase() === nickname.toLowerCase())) {
      setInputErrorMsg('Nickname has been taken')
      return
    }
    
    saveCatchedPokemon(nickname)
  }

  useEffect(() => setInputErrorMsg(null), [nickname])
  
  const FailedToCatch = () => {
    return (
      <div className="text-centered">
        <h2>Failed to catch</h2>
        <p>Maybe try again?</p>

        <Button callbackFunc={() => closeModal(false)}>Close</Button>
      </div>    
    )
  }
  
  return (
    <Wrapper>
      <Overlay className="overlay display-flex-centered">
        <Modal>
          {
            isCaptured && 
            <div className="text-centered">
              <h2 className="capitalize">You catched {pokemon.name}!</h2>
              <p>Give it a catchy nickname</p>
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className={css`margin-bottom: 1rem`}>
                  <Input
                    name="nickname"
                    type="text"
                    value={nickname}
                    onChange={(event) => setNickname(event.target.value)}
                  ></Input>
                  {
                    inputErrorMsg &&
                      <div>
                        <small className="text-error">{ inputErrorMsg }</small>
                      </div>
                  }
                </div>
        
                <div>
                  <Button bgColor={color.blue} type="submit">
                    <h4 className="text-white mx-0 my-0">
                      Save
                    </h4>
                  </Button>
                </div>
              </form>
            </div>
          }
          {
            !isCaptured && <FailedToCatch />
          }
        </Modal>
      </Overlay>
    </Wrapper>
  )
}

export default ModalCatchPokemon