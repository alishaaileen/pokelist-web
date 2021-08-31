import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

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
  width: 70%;
  background-color: #fff;
  padding: 16px;
`
const Button = styled.button`
  background-color: #f5f5f5;
  padding: 8px;

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

        <Button onClick={() => closeModal(false)}>Close</Button>
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
              <h2>You catched {pokemon.name}!</h2>
              <p>Give it a nickname</p>
              <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                  <input
                    name="nickname"
                    type="text"
                    value={nickname}
                    onChange={(event) => setNickname(event.target.value)}
                  ></input>
                  {
                    inputErrorMsg &&
                      <div>
                        <small className="text-error">{ inputErrorMsg }</small>
                      </div>
                  }
                </div>
        
                <Button type="submit">
                  Save
                </Button>
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