// @flow
import * as Yup from 'yup'
import type { IProps } from './types'
import type { ICredentials } from 'common/types'

export default {

  mapPropsToValues: () => ({
    email: '',
    password: '',
    passwordConfirmation: '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required()
      .min(6),
    passwordConfirmation: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], "Passwords don't match"),
  }),

  handleSubmit: async (credentials: ICredentials, { setSubmitting, props }: IProps) => {
    setSubmitting(true)
    await props.signUpAsync(credentials)
    setSubmitting(false)
  },

  displayName: 'SignUpForm',
}
