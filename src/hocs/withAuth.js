// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { ROUTE } from 'common/constants'

const withAuth = ComposedComponent => {
  const Authentication = props => {
    if (props.authenticated) {
      return <ComposedComponent {...props} />
    }
    return <Redirect to={ROUTE.SIGN_IN} push />
  }

  return connect(state => state.auth)(Authentication)
}

export default withAuth
