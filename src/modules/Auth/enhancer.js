// @flow
import React from 'react'
import { compose, withHandlers, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { withFormik } from 'formik'
import type { IStore } from 'store/types'
import { ROUTE } from 'common/constants'

const buildEnhancer = (formConfig: any) => compose(
  connect(
    (store: IStore) => store.auth,
    ({
      auth: {
        facebookSignInAsync,
        googleSignInAsync,
        signInAsync,
        signUpAsync,
      },
    }: IStore) => ({
      facebookSignInAsync,
      googleSignInAsync,
      signInAsync,
      signUpAsync,
    }),
  ),
  withHandlers({
    async handleGoogleResponse(response) {
      const accessToken = response.getAuthResponse().access_token
      if (accessToken) {
        await this.props.googleSignInAsync(accessToken)
      } else {
        alert('Something went wrong')
      }
    },
    async handleFacebookResponse(response) {
      if (response.accessToken) {
        await this.props.facebookSignInAsync(response.accessToken)
      } else {
        alert('Something went wrong')
      }
    },
  }),
  withFormik(formConfig),
  withRouter,
  branch(
    props => props.isAuthenticated,
    renderComponent(() => (
      <Redirect to={{ pathname: ROUTE.HOME }} push />
    )),
  ),
)

export default buildEnhancer
