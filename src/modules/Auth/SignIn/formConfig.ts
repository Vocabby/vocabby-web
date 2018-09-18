import * as Yup from 'yup'
import { WithFormikConfig } from 'formik'
import { IInnerProps, IValues } from './types'

const config: WithFormikConfig<IInnerProps, IValues> = {
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

  handleSubmit: async (credentials: IValues, { setSubmitting, props }) => {
    setSubmitting(true)
    await props.signInAsync(credentials)
    setSubmitting(false)
  },

  displayName: 'SignInForm',
}

export default config
