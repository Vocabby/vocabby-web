import React from 'react'
import ClickableWord from './ClickableWord'
import { Row, StyledIcon } from './styled'
import Tooltip from 'components/Tooltip'

const isAdded = (studyItems, wordsHash, wordId) => {
  return Boolean(studyItems[wordId])
}

const Lyrics = ({ content, contentTranslated, words, studyItems }) => {

  const wordsHash = words.reduce((hash, word) => {
    hash[word.id] = word
    return hash
  }, {})

  const studyItemHash = studyItems.reduce((hash, item) => {
    hash[item.id] = item
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
              position="left"
              title={contentTranslated[rowKey]}
            >
              <StyledIcon icon="eye" />
            </Tooltip>
          )}
          {row.words.map(
            (wordDef, key) =>
              wordDef.id && wordsHash[wordDef.id] ? (
                <ClickableWord
                  key={key}
                  isAdded={isAdded(studyItemHash, wordsHash, wordDef.id)}
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
