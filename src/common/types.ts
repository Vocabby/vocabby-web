export interface IUserToken {
  _id: string
  token: string
  email: string
}

export interface ICredentials {
  email: string
  password: string
}

export interface IWord {
  id: string
  title: string
  definition: string
  audioUrl: string
}

export interface IStudyItem {
  wordId: string
  word: IWord
}

export interface IVocab {
  id: string
  group: string
  mediaUrl: string
  previewUrl: string
  wordCount: number
  title: string
  slug: string
  isFavorite: boolean
  words: IWord[]
  studyItems: IStudyItem[]
}

export interface IPracticeSet {
  words: IWord[]
  studyItems: IStudyItem[]
}
