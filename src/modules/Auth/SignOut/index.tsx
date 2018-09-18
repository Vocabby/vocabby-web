import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { compose, lifecycle, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { ROUTE } from 'common/constants'
import { IStore, IDispatch } from 'store'

const SignOut = () => <div>Signing out...</div>

const mapProps = (store: IStore) => store.auth

const mapDispatch = (dispatch: IDispatch) => ({
  signOut: dispatch.auth.signOut as any,
})

type ConnectProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>

export default compose(
  connect(mapProps, mapDispatch),
  lifecycle<ConnectProps, {}>({
    componentDidMount() {
      this.props.signOut()
    },
  }),
  withRouter,
  branch<ConnectProps>(
    props => props.isAuthenticated,
    renderComponent(() => <Redirect to={{ pathname: ROUTE.SIGN_IN }} push />)
  )
)(SignOut)
