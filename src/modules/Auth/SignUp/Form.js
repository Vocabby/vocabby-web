// @flow
import React, { Fragment } from 'react'
import type { IProps } from './types'
import { Input, DangerAlert, FormGroup, Button, ErrorLabel } from 'components/Generic'

const SignUpForm = ({
  errorMessage,
  isSubmitting,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}: IProps) => (
  <Fragment>
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
  </Fragment>
)

export default SignUpForm
