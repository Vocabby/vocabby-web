// @flow
import React from 'react'
import { lifecycle, compose, branch, renderComponent } from 'recompose'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { isTokenValid } from './helpers'
import { ROUTE } from 'common/constants'
import clientStorage from 'common/clientStorage'

const withTokenValidation = compose(
  branch(
    props => props.isAuthenticated,
    renderComponent(() => <Redirect to={{ pathname: ROUTE.SIGN_IN }} push />),
  ),
  connect(state => state.auth, ({ auth: { signOut } }) => ({ signOut })),
  lifecycle({
    componentDidMount() {
      const token = clientStorage.getToken()
      if (!token || !isTokenValid(token)) {
        this.props.signOut()
      }
    },
  }),
)

export default withTokenValidation
