// @flow
import type { RematchDispatch } from '@rematch/core'
import type { IVocab } from 'common/types'

export type IVocabState = {|
  +vocab?: IVocab,
  +isLoading: boolean,
|}

export type IVocabEffects = RematchDispatch => {|
  +loadAsync: Function,
|}

export type IVocabReducers = {|
  +loading: Function,
  +loaded: Function,
|}

export type IVocabModel = IVocabState & IVocabEffects & IVocabReducers
