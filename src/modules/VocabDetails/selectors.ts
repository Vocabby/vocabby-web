import { IStore, IDispatch } from 'store'

export const propSelector = (state: IStore) => ({
  ...state.vocab,
  isAuthenticated: state.auth.isAuthenticated,
})

export const dispatchSelector = (dispatch: IDispatch) => ({

})
