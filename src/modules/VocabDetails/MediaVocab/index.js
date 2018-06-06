// @flow
import React from 'react'
import StickyBox from 'react-sticky-box'
import type { IProps } from '../types'
import MyWords from './MyWords'
import Preview from './Preview'
import PracticeButton from './PracticeButton'
import { ContentHeader, DoorStop, MutedText } from './styled'
import Lyrics from './Lyrics'
import FavoriteButton from './FavoriteButton'
import { Container, Column, Panel, PanelBody, PanelHeading } from 'components/Generic'

const MediaVocab = ({ vocab, isAuthenticated, removeStudyItem }: IProps) => (
  <Container>
    <Column width={30}>
      <StickyBox>
        <DoorStop />
        <Preview mediaUrl={vocab.mediaUrl} />
      </StickyBox>
    </Column>
    <Column width={45}>
      <DoorStop />
      <Panel>
        <ContentHeader>
          <FavoriteButton
            isFavorite
            onFavorite={() => ({})}
          />
          <h2>
            {vocab.title}{' '}
            <MutedText>
              ({vocab.wordCount} unique words)
            </MutedText>
          </h2>
        </ContentHeader>
        <PanelBody>
          <Lyrics {...vocab} />
        </PanelBody>
      </Panel>
    </Column>
    <Column width={25}>
      <StickyBox>
        <DoorStop />
        <Panel>
          <PanelHeading>
            <b>Your words</b>
          </PanelHeading>
          <MyWords
            studyItems={vocab.studyItems}
            words={vocab.words}
            removeStudyItem={removeStudyItem}
          />
          <div className="panel-footer text-center">
            <PracticeButton
              hasStudyItems={Object.keys(vocab.studyItems).length > 0}
              vocabId={vocab.id}
              isAuthenticated={isAuthenticated} />
          </div>
        </Panel>
      </StickyBox>
    </Column>
  </Container>
)

export default MediaVocab
