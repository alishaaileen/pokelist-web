import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const NavWrapper = styled.div`
  nav {
    background-color: #292929;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 5px 0;
    position: fixed;
    z-index: 2;
  }
`
const NavMenu = styled.div`
  color: #f5f5f5;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #15171c;
  }
`

export const Navbar = () => {
  return (
    <NavWrapper>
      <nav>
        <Link className="link-no-decoration" to="/">
          <NavMenu>
            PokeList
          </NavMenu>
        </Link>
        <Link className="link-no-decoration" to="/my-pokemon">
          <NavMenu>
            My Pokemon
          </NavMenu>
        </Link>
      </nav>
    </NavWrapper>
  )
}

export default Navbar