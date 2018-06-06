// @flow
import type { IVocab } from 'common/types'

export type IVocabState = {|
  +vocab?: IVocab,
  +isLoading: boolean,
|}

export type IVocabEffects = {|
  +loadAsync: Function,
|}

export type IVocabReducers = {|
  +loading: Function,
  +loaded: Function,
|}

export type IVocabModel = IVocabState & IVocabEffects & IVocabReducers
