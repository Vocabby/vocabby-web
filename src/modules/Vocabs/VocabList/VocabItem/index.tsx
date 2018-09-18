import React, { SFC } from 'react'
import { Link } from 'react-router-dom'
import {
  VocabContainer,
  VocabBody,
  VocabTitle,
  WordCounter,
  Image,
} from './styled'
import { Column } from 'components/Generic'

interface IOuterProps {
  previewUrl: string
  wordCount: number
  title: string
  slug: string
}

const VocabItem: SFC<IOuterProps> = ({ slug, previewUrl, title, wordCount }) => (
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
