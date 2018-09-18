import React, { SFC } from 'react'
import WordRow from './WordRow'
import { PanelBody, Table } from 'components/Generic'
import Alert from 'components/Alert'
import { IWord, IStudyItem } from 'common/types'

interface IOuterProps {
  words: IWord[]
  studyItems: IStudyItem[]
  removeStudyItem: (id: string) => void
}

const MyWords: SFC<IOuterProps> = ({ studyItems, removeStudyItem, words }) => {
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

  const wordsHash = words.reduce((hash: any, word) => {
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
