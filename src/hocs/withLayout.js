// @flow
import React, { Fragment } from 'react'
import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import Navbar from 'components/Navbar'

const Layout = ({ WrappedComponent, isAuthenticated, ...props }) => (
  <Fragment>
    <Navbar isLoggedIn={isAuthenticated} />
    <WrappedComponent {...props} />
  </Fragment>
)

const withLayout = (WrappedComponent: React.DOM) =>
  compose(
    connect(state => state.auth),
    withProps(() => ({
      WrappedComponent,
    })),
  )(Layout)

export default withLayout
