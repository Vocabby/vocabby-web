import React, { SFC } from 'react'
import StickyBox from 'react-sticky-box'
import MyWords from './MyWords'
import Preview from './Preview'
import PracticeButton from './PracticeButton'
import { ContentHeader, DoorStop, MutedText } from './styled'
import Lyrics from './Lyrics'
import FavoriteButton from './FavoriteButton'
import { IVocab } from 'common/types'
import { Container, Column, Panel, PanelBody, PanelHeading, PanelFooter } from 'components/Generic'

interface IProps {
  vocab: IVocab
  isAuthenticated: boolean
  removeStudyItem: (id: string) => void
}

const MediaVocab: SFC<IProps> = ({ vocab, isAuthenticated, removeStudyItem }) => (
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
            isFavorite={vocab.isFavorite}
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
          <PanelFooter>
            <PracticeButton
              hasStudyItems={vocab.studyItems.length > 0}
              vocabId={vocab.id}
              isAuthenticated={isAuthenticated} />
          </PanelFooter>
        </Panel>
      </StickyBox>
    </Column>
  </Container>
)

export default MediaVocab
