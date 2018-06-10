// @flow
import React from 'react'
import { Wrapper, Lead, HighlightedText } from './styled'
import { Container, Column, H1 } from 'components/Generic'

const Hero = () => (
  <Wrapper>
    <Container>
      <Column width={100}>
        <H1>Vocabby</H1>
        <Lead>
          Learn <HighlightedText>Spanish</HighlightedText> words from your
          favorite songs and movies
        </Lead>
      </Column>
    </Container>
  </Wrapper>
)

export default Hero
