import React from 'react'
import WordRow from './WordRow'
import { PanelBody } from 'components/Generic'
import Alert from 'components/Alert'

const MyWords = ({ studyItems, removeStudyItem, words }) => {
  const itemsArray = Object.keys(studyItems)
  if (itemsArray.length === 0) {
    return (
      <PanelBody>
        <Alert>
          <b>Hover</b> over words you don't know to get a translation.&nbsp;
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
    <table className="table">
      <tbody>
        {
          itemsArray.map(item => <WordRow word={wordsHash[item]} key={item} onRemove={removeStudyItem} />)
        }
      </tbody>
    </table>
  )
}

export default MyWords
