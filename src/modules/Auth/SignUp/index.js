// @flow
import React from 'react'
import Layout from '../Layout'
import buildEnhancer from '../enhancer'
import formConfig from './formConfig'
import Form from './Form'
import { ROUTE } from 'common/constants'

const SignUp = (props: any) => (
  <Layout {...props} location={ROUTE.SIGN_UP}>
    <Form {...props} />
  </Layout>
)

export default buildEnhancer(formConfig)(SignUp)
