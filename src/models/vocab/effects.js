// @flow
import { dispatch } from '@rematch/core'
import { getVocab } from 'common/api'

const effects = {
  async loadAsync(slug: string) {
    dispatch.vocab.loading()
    const vocab = await getVocab(slug)
    dispatch.vocab.loaded({ vocab })
  },
}

export default effects
