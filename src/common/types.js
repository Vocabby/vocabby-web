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

export type IWord = {|
  +id: string,
  +title: string,
  +definition: string,
  +audioUrl: string,
|}

export type IStudyItem = {|
  +wordId: string,
|}

export type IVocab = {|
  +id: string,
  +group: string,
  +mediaUrl: string,
  +previewUrl: string,
  +wordCount: number,
  +title: string,
  +slug: string,
  +words: IWord[],
  +studyItems: IStudyItem[],
|}
