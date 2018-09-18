import { FormikProps } from 'formik'
import { mapProps, mapDispatch } from './selectors'

export interface IOuterProps {}

export interface IValues {
  email: string
  password: string
  passwordConfirmation: string
}

export type IInnerProps = IOuterProps &
  ReturnType<typeof mapProps> &
  ReturnType<typeof mapDispatch> &
  FormikProps<IValues>
