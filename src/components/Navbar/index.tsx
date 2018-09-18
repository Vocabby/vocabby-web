import React, { SFC } from 'react'
import { Link } from 'react-router-dom'
import { NavContainer, Wrapper, Nav, NavItem, LogoContainer } from './styled'
import { ROUTE } from 'common/constants'

interface IOuterProps {
  isLoggedIn: boolean
}

const Navbar: SFC<IOuterProps> = ({ isLoggedIn }) => (
  <Wrapper>
    <NavContainer>
      <div>
        <LogoContainer>
          <Link to={ROUTE.HOME}>
            <img src="/images/logo.png" alt="Vocabby" />
          </Link>
        </LogoContainer>
        <Nav>
          <NavItem>
            <Link to={ROUTE.HOME}>Home</Link>
          </NavItem>
        </Nav>
      </div>

      {
        isLoggedIn && (
          <Nav>
            <NavItem>
              <Link to={ROUTE.SIGN_OUT}>Sign out</Link>
            </NavItem>
          </Nav>
        )
      }

      {
        !isLoggedIn && (
          <Nav>
            <NavItem>
              <Link to={ROUTE.SIGN_IN}>Sign in</Link>
            </NavItem>
            <NavItem>
              <Link to={ROUTE.SIGN_UP}>Sign up</Link>
            </NavItem>
          </Nav>
        )
      }
    </NavContainer>
  </Wrapper>
)

export default Navbar
