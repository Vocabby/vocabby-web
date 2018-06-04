const reducers = {
  loading(state) {
    return {
      ...state,
      isLoading: true,
    }
  },
  loaded(state, { vocab }) {
    return {
      ...state,
      isLoading: false,
      vocab,
    }
  },
}

export default reducers
