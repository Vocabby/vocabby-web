import * as Yup from 'yup'
import { WithFormikConfig } from 'formik'
import { IInnerProps, IValues } from './types'

const config: WithFormikConfig<IInnerProps, IValues> = {

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

  handleSubmit: async (credentials, { setSubmitting, props }) => {
    setSubmitting(true)
    await props.signUpAsync(credentials)
    setSubmitting(false)
  },

  displayName: 'SignUpForm',
}

export default config
