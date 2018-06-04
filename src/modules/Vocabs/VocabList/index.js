// @flow
import React from 'react'
import VocabItem from './VocabItem'
import VocabItemMore from './VocabItemMore'
import type { IProps } from './types'
import { Container } from 'components/Generic'

const VocabList = ({ entries }: IProps) => (
  <Container>
    {entries.map(vocab => <VocabItem key={vocab.slug} {...vocab} />)}
    <VocabItemMore />
  </Container>
)

export default VocabList
