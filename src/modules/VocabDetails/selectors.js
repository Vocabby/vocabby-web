// @flow

export const propSelector = (state: any) => ({
  ...state.vocab,
  isAuthenticated: state.auth.isAuthenticated,
})

export const dispatchSelector = () => ({

})
