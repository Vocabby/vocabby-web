// @flow
import React from 'react'
import WordRow from './WordRow'
import { PanelBody, Table } from 'components/Generic'
import Alert from 'components/Alert'
import type { IWord, IStudyItem } from 'common/types'

type IProps = {|
  +words: IWord[],
  studyItems: IStudyItem[],
  removeStudyItem: string => void,
|}

const MyWords = ({ studyItems, removeStudyItem, words }: IProps) => {
  if (studyItems.length === 0) {
    return (
      <PanelBody>
        <Alert>
          <b>Hover</b> over words you don&apos;t know to get a translation.&nbsp;
          <b>Click</b> on the words to add them to your personal vocabulary.
        </Alert>
      </PanelBody>
    )
  }

  const wordsHash = words.reduce((hash, word) => {
    hash[word.id] = word
    return hash
  }, {})

  return (
    <Table>
      <tbody>
        {
          studyItems.map(item => <WordRow word={wordsHash[item.wordId]} key={item.wordId} onRemove={removeStudyItem} />)
        }
      </tbody>
    </Table>
  )
}

export default MyWords
