// @flow
export type IUserToken = {|
  _id: string,
  token: string,
  email: string,
|}

export type ICredentials = {|
  email: string,
  password: string,
|}

// TODO: define
export type IWord = any

export type IStudyItem = {|
  +wordId: string,
|}

export type IVocab = {|
  +id: string,
  +group: string,
  +mediaUrl: string,
  +wordCount: number,
  +title: string,
  +words: $ReadonlyArray<IWord>,
  +studyItems: $ReadonlyArray<IStudyItem>,
|}
