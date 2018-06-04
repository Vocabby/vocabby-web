// @flow
import React from 'react'
import Layout from '../Layout'
import buildEnhancer from '../enhancer'
import formConfig from './formConfig'
import Form from './Form'
import { ROUTE } from 'common/constants'

const SignIn = (props: any) => (
  <Layout {...props} location={ROUTE.SIGN_IN}>
    <Form {...props} />
  </Layout>
)

export default buildEnhancer(formConfig)(SignIn)
