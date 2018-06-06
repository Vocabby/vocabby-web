// @flow
import type { IAuthModel } from 'models/auth/types'
import type { IVocabsModel } from 'models/vocabs/types'
import type { IVocabModel } from 'models/vocab/types'

export type IStore = {|
  auth: IAuthModel,
  vocabs: IVocabsModel,
  vocab: IVocabModel,
|}
