import React, { Component, Fragment } from 'react'
import { compose } from 'recompose'
import { withRouter, Redirect, RouteComponentProps } from 'react-router-dom'
import LearnResult from './LearnResult'
import WordBuilderGame from './WordBuilderGame'
import TypeInGame from './TypeInGame'
import { Widget } from './styled'
import { ROUTE } from 'common/constants'
import GameLoading from 'components/GameLoading'
import ProgressBar from 'components/ProgressBar'
import CloseButton from 'components/CloseButton'
import { WidgetHeader, Column, Container } from 'components/Generic'
import { shuffleArray, divideInt, randomInt } from 'common/utils'
import { initPractice } from 'common/api'
import { IWord } from 'common/types'
import withTokenValidation from 'hocs/withTokenValidation'

enum Game {
  Builder = 'builder-game',
  TypeIn = 'type-in',
}

type IProps = RouteComponentProps<{ slug: string }> & {

}

type IPracticeItem = IWord & {
  game: Game,
}

interface IState {
  items: IPracticeItem[]
  current: IPracticeItem
  correct: number
  incorrect: number
  isLoading: boolean
  gameEnded: boolean
}

class Practice extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      items: [],
      current: undefined,
      gameEnded: false,
      correct: 0,
      incorrect: 0,
      isLoading: true,
    }
    this.interruptPractice = this.interruptPractice.bind(this)
    this.endPractice = this.endPractice.bind(this)
    this.getNext = this.getNext.bind(this)
  }

  async componentDidMount() {
    const result = await initPractice(this.props.match.params.slug)

    const items = result.studyItems.map(item => ({
      ...item.word,
      game: Game.Builder,
    }))

    shuffleArray(items)
    this.updateItems(items, 0, 0)
  }

  interruptPractice() {
    if (confirm('Are you sure you want to end practice? Your progress will be lost')) {
      this.props.history.push(ROUTE.HOME)
    }
  }

  endPractice() {
    this.props.history.push(ROUTE.HOME)
  }

  getNext(guessed: boolean) {
    let { correct, incorrect } = this.state
    const { current } = this.state
    const items = this.state.items.slice(1)
    if (guessed) {
      correct++
      if (current.game === Game.Builder) {
        current.game = Game.TypeIn
        if (items.length < 5) {
          items.push(current)
        } else {
          const third = divideInt(items.length, 3)
          items.splice(randomInt(third, items.length - 1), 0, current)
        }
      }
    } else {
      incorrect++
    }
    this.updateItems(
      items,
      correct,
      incorrect
    )
  }

  updateItems(items: IPracticeItem[], correct: number, incorrect: number) {
    this.setState({
      items,
      correct,
      incorrect,
      current: items[0],
      gameEnded: items.length === 0,
      isLoading: false,
    })
  }

  getProgress() {
    const done = this.state.correct + this.state.incorrect
    const total = done + this.state.items.length

    return done / total * 100
  }

  render() {
    const { gameEnded, correct, incorrect, isLoading, current } = this.state
    return (
      <Container>
        <Column width={20} />
        <Column width={60}>
          <Widget>
            <WidgetHeader>
              {
                !this.state.isLoading
                  && !this.state.gameEnded
                  && (
                    <Fragment>
                      <ProgressBar percent={this.getProgress()} />
                      <CloseButton onClick={this.endPractice} />
                    </Fragment>
                  )
              }
            </WidgetHeader>
            {
              gameEnded ? (
                (correct + incorrect === 0)
                  ? <Redirect to={ROUTE.HOME} push />
                  : (
                    <LearnResult
                      onComplete={this.endPractice}
                      correct={this.state.correct}
                      incorrect={this.state.incorrect}
                    />
                  )
              ) : (
                isLoading
                  ? <GameLoading />
                  : (
                    (current.game === Game.Builder)
                      ? <WordBuilderGame key={current.id}
                          word={current}
                          getNextWord={this.getNext}
                        />
                      : <TypeInGame
                          key={current.id}
                          word={current}
                          getNextWord={this.getNext}
                        />
                  )
              )
            }
          </Widget>
        </Column>
      </Container>
    )
  }
}

export default compose(
  withRouter,
  withTokenValidation
)(Practice)
