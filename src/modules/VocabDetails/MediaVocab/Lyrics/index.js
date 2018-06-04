import React from 'react'
import ClickableWord from './ClickableWord'
import { Row } from './styled'
import Tooltip from 'components/Tooltip'

const isAdded = (studyItems, wordsHash, wordId) => {
  console.log(studyItems)
  console.log(wordsHash[wordId])
  // Boolean(studyItems[])
  return false
}

const Lyrics = ({ content, contentTranslated, words, studyItems }) => {

  const wordsHash = words.reduce((hash, word) => {
    hash[word.id] = word
    return hash
  }, {})

  return content.map(
    (row, rowKey) =>
      row.words.length === 0 ? (
        <br key={rowKey} />
      ) : (
        <Row key={rowKey}>
          {contentTranslated.length > 0 && (
            <Tooltip
              theme="light"
              className="m-r-sm"
              position="left"
              title={contentTranslated[rowKey]}
            >
              <i className="fa fa-eye" />
            </Tooltip>
          )}
          {row.words.map(
            (wordDef, key) =>
              wordDef.id && wordsHash[wordDef.id] ? (
                <ClickableWord
                  key={key}
                  isAdded={isAdded(studyItems, wordsHash, wordDef.id)}
                  title={wordsHash[wordDef.id].title}
                  definition={wordsHash[wordDef.id].definition}
                  value={wordDef.value}
                />
              ) : (
                wordDef.value
              )
          )}
        </Row>
      )
  )
}

export default Lyrics
