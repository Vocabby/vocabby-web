import styled from 'styled-components'
import { Container } from 'components/Generic'

export const Wrapper = styled.nav`
  border-bottom: 1px solid #e7e7e7;
  min-height: 70px;
  background: white;
`

export const NavContainer = styled(Container)`
  justify-content: space-between;
`

export const Nav = styled.ul`
  float: left;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const NavItem = styled.li`
  position: relative;
  display: block;
  float: left;
  margin-left: 40px;

  a {
    line-height: 70px;
    color: ${props => props.theme.color.text};
    font-weight: bold;
  }
`

export const LogoContainer = styled.span`
  float: left;

  img {
    height: 45px;
    margin-top: 13px;

    &:hover {
      cursor: pointer;
    }
  }
`
