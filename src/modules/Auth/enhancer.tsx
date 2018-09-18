import React from 'react'
import { compose, withHandlers, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { withFormik } from 'formik'
import { ROUTE } from 'common/constants'
import { IStore, IDispatch } from 'store'

const mapProps = (store: IStore) => store.auth

const mapDispatch = (dispatch: IDispatch) => ({
  facebookSignInAsync: dispatch.auth.facebookSignInAsync,
  googleSignInAsync: dispatch.auth.googleSignInAsync,
  signInAsync: dispatch.auth.signInAsync,
  signUpAsync: dispatch.auth.signUpAsync,
})

type ConnectProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>

interface IHandlers {
  handleGoogleResponse: (response: any) => void
  handleFacebookResponse: (response: any) => void
}

const buildEnhancer = (formConfig: any) => compose(
  connect(mapProps, mapDispatch),
  withHandlers<ConnectProps, IHandlers>({
    handleGoogleResponse: ({ googleSignInAsync }) => async response => {
      const accessToken = response.getAuthResponse().access_token
      if (accessToken) {
        await googleSignInAsync(accessToken)
      } else {
        alert('Something went wrong')
      }
    },
    handleFacebookResponse: ({ facebookSignInAsync }) => async response => {
      if (response.accessToken) {
        await facebookSignInAsync(response.accessToken)
      } else {
        alert('Something went wrong')
      }
    },
  }),
  withFormik(formConfig),
  withRouter,
  branch<ConnectProps>(
    props => props.isAuthenticated,
    renderComponent(() => (
      <Redirect to={{ pathname: ROUTE.HOME }} push />
    ))
  )
)

export default buildEnhancer
