// @flow
import React, { SFC } from 'react'
import { Input, DangerAlert, FormGroup, Button, ErrorLabel } from 'components/Generic'
import Layout from '../Layout'
import buildEnhancer from '../enhancer'
import formConfig from './formConfig'
import { ROUTE } from 'common/constants'
import { IInnerProps } from './types'

const SignUp: SFC<IInnerProps> = ({
  errorMessage,
  handleBlur,
  handleChange,
  handleSubmit,
  values,
  errors,
  touched,
  isSubmitting,
  ...rest
}) => (
  <Layout {...rest} location={ROUTE.SIGN_UP}>
    {errorMessage && <DangerAlert>{errorMessage}</DangerAlert>}
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="email" />
          {
            errors.email
            && touched.email
            && <ErrorLabel>{errors.email}</ErrorLabel>

          }
        </FormGroup>
        <FormGroup>
          <Input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="password" />
          {
            errors.password
            && touched.password
              && <ErrorLabel>{errors.password}</ErrorLabel>

          }
        </FormGroup>
        <FormGroup>
          <Input
            name="passwordConfirmation"
            type="password"
            value={values.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="password confirmation" />
          {
            errors.passwordConfirmation
            && touched.passwordConfirmation
              && <ErrorLabel>{errors.passwordConfirmation}</ErrorLabel>

          }
        </FormGroup>
        <Button type="submit" disabled={isSubmitting} block primary>
          Sign Up
        </Button>
      </form>
  </Layout>
)

export default buildEnhancer(formConfig)(SignUp)
