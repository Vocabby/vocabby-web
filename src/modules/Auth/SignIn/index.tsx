import React, { SFC } from 'react'
import Layout from '../Layout'
import { Input, DangerAlert, FormGroup, Button, ErrorLabel } from 'components/Generic'
import buildEnhancer from '../enhancer'
import formConfig from './formConfig'
import { ROUTE } from 'common/constants'
import { IInnerProps } from './types'

const SignIn: SFC<IInnerProps> = ({
  errorMessage,
  handleSubmit,
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  isSubmitting,
  ...rest
}) => (
  <Layout
    {...rest}
    location={ROUTE.SIGN_IN}
  >
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
      <Button type="submit" disabled={isSubmitting} block primary>
        Sign In
      </Button>
    </form>
  </Layout>
)

export default buildEnhancer(formConfig)(SignIn)
