import React from 'react'
import { Link } from 'react-router-dom'
import {
  VocabContainer,
  VocabBody,
  VocabTitle,
  WordCounter,
  Image,
} from './styled'
import type { IProps } from './types'
import { Column } from 'components/Generic'

const VocabItem = ({ slug, previewUrl, title, wordCount }: IProps) => (
  <Column width={25}>
    <VocabContainer>
      <Link to={`/vocabs/${slug}`}>
        <Image src={previewUrl} alt="" />
      </Link>
      <VocabBody>
        <VocabTitle>{title}</VocabTitle>
        <WordCounter>{wordCount} words</WordCounter>
      </VocabBody>
    </VocabContainer>
  </Column>
)


export default VocabItem
