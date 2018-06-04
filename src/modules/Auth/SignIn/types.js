// @flow

export type IProps = {|
  props: {
    signInAsync: Function,
  },
  setSubmitting: Function,
  errorMessage: string,
  isSubmitting: boolean,
  values: any,
  errors: any,
  touched: any,
  handleChange: Function,
  handleBlur: Function,
  handleSubmit: Function,
|}
