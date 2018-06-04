// @flow
import * as Yup from 'yup'
import type { IProps } from './types'
import type { ICredentials } from 'common/types'

export default {

  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .required()
      .min(6),
  }),

  handleSubmit: async (credentials: ICredentials, { setSubmitting, props }: IProps) => {
    setSubmitting(true)
    await props.signInAsync(credentials)
    setSubmitting(false)
  },

  displayName: 'SignInForm',
}
