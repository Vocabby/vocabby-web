import React, { Fragment, ReactNode, SFC } from 'react'
import Navbar from 'components/Navbar'

interface IOuterProps {
  isAuthenticated: boolean
  children: ReactNode
}

const Layout: SFC<IOuterProps> = ({ isAuthenticated, children }) => (
  <Fragment>
    <Navbar isLoggedIn={isAuthenticated} />
    {children}
  </Fragment>
)

export default Layout
