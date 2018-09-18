import { IStore, IDispatch } from 'store'

export const mapProps = (store: IStore) => store.auth

export const mapDispatch = (dispatch: IDispatch) => ({
  signUpAsync: dispatch.auth.signUpAsync,
})
