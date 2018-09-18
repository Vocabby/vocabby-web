import React, { SFC } from 'react'
import VocabItem from './VocabItem'
import { IVocab } from 'common/types'
import { Container } from 'components/Generic'

interface IOuterProps {
  entries: IVocab[]
}

const VocabList: SFC<IOuterProps> = ({ entries }) => (
  <Container>
    {entries.map(vocab => <VocabItem key={vocab.slug} {...vocab} />)}
  </Container>
)

export default VocabList
