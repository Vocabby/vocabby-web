import { dispatch } from '@rematch/core'
import { getVocabs } from 'common/api'

const effects = {
  async loadAsync() {
    dispatch.vocabs.loading()
    const entries = await getVocabs()
    dispatch.vocabs.loaded({ entries })
  },
}

export default effects
