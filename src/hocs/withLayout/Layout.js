// @flow
import React, { Fragment } from 'react'
import Navbar from 'components/Navbar'

type IProps = {
  WrappedComponent: React.DOM,
  isAuthenticated: boolean,
}

const Layout = ({ WrappedComponent, isAuthenticated, ...props }: IProps) => (
  <Fragment>
    <Navbar isLoggedIn={isAuthenticated} />
    <WrappedComponent {...props} />
  </Fragment>
)

export default Layout
