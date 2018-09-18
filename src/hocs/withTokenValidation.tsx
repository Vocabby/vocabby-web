import React from 'react'
import { lifecycle, compose, branch, renderComponent } from 'recompose'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { ROUTE } from 'common/constants'
import clientStorage from 'common/clientStorage'
import { IStore, IDispatch } from 'store'

const isTokenValid = (token: string) => {
  try {
    const decodedToken: { exp: number } = jwtDecode(token)
    const expiryDate = new Date(decodedToken.exp * 1000)
    return expiryDate > new Date()
  } catch (err) {
    return false
  }
}

const mapProps = (store: IStore) => store.auth

const mapDispatch = (dispatch: IDispatch) => ({
  signOut: dispatch.auth.signOut as any,
})

type ConnectedProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>

const withTokenValidation = compose(
  connect(mapProps, mapDispatch),
  branch<ConnectedProps>(
    props => props.isAuthenticated,
    renderComponent(() => <Redirect to={{ pathname: ROUTE.SIGN_IN }} push />)
  ),
  lifecycle<ConnectedProps, {}>({
    componentDidMount() {
      const token = clientStorage.getToken()
      if (!token || !isTokenValid(token)) {
        this.props.signOut()
      }
    },
  })
)

export default withTokenValidation
