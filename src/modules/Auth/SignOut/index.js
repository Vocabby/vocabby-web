// @flow
import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { compose, lifecycle, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { ROUTE } from 'common/constants'

const SignOut = () => <div>Signing out...</div>

export default compose(
  connect(state => state.auth, ({ auth: { signOut } }) => ({ signOut })),
  lifecycle({
    componentDidMount() {
      this.props.signOut()
    },
  }),
  withRouter,
  branch(
    props => props.isAuthenticated,
    renderComponent(() => <Redirect to={{ pathname: ROUTE.SIGN_IN }} push />),
  ),
)(SignOut)
