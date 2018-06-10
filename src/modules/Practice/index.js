// @flow
import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import type { ContextRouter } from 'react-router-dom'
import LearnResult from './LearnResult'
import WordBuilderGame from './WordBuilderGame'
import TypeInGame from './TypeInGame'
import GameLoading from 'components/GameLoading'
import ProgressBar from 'components/ProgressBar'
import CloseButton from 'components/CloseButton'
import { Widget, WidgetHeader, Column, Container } from 'components/Generic'
import { shuffleArray, divideInt, randomInt } from 'common/utils'
import { initPractice } from 'common/api'
import type { IWord } from 'common/types'

const GAME = Object.freeze({
  BUILDER: 'builder-game',
  TYPE_IN: 'type-in-game',
})

type IProps = ContextRouter & {

}

type IState = {|
  items: IWord[],
  current: IWord,
  correct: number,
  incorrect: number,
  isLoading: boolean,
  gameEnded: boolean,
|}

class Practice extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      items: [],
      current: {},
      gameEnded: false,
      correct: 0,
      feedback: [],
      incorrect: 0,
      results: {},
      isLoading: true,
    }
  }

  async componentDidMount() {
    const result = await initPractice(this.props.match.params.slug)
    console.log(result)

    const items = result.data.values.map(item => {
      item.game = BUILDER_GAME
      return item
    })
    shuffleArray(items)
    const results = items.reduce((acc, val) => {
      acc[val.id] = 0
      return acc
    }, {})
    this.updateItems(items, 0, 0, results, [])
  }

  endPractice = () => {
    if (
      this.state.gameEnded ||
      confirm(
        'Are you sure you want to end practice? Your progress will be lost'
      )
    ) {
      this.props.history.push('/home')
    }
  }

  getNext = guessed => {
    let {
      guessedCorrectly,
      guessedIncorrectly,
      results,
      current,
      feedback,
    } = this.state
    const items = this.state.items.slice(1)
    if (guessed) {
      guessedCorrectly++
      results[current.id] += current.game === BUILDER_GAME ? 3 : 1
      if (current.game === BUILDER_GAME) {
        current.game = TYPEIN_GAME
        if (items.length < 5) {
          items.push(current)
        } else {
          const third = divideInt(items.length, 3)
          items.splice(randomInt(third, items.length - 1), 0, current)
        }
      }
    } else {
      guessedIncorrectly++
      feedback.push(current)
    }
    this.updateItems(
      items,
      guessedCorrectly,
      guessedIncorrectly,
      results,
      feedback
    )
  }

  updateItems({ items, correct, incorrect, results, feedback }) {
    this.setState({
      items,
      correct,
      incorrect,
      results,
      feedback,
      current: items[0],
      gameEnded: items.length === 0,
      isLoading: false,
    })
  }

  getProgress() {
    const done = this.state.guessedCorrectly + this.state.guessedIncorrectly
    const total = done + this.state.items.length

    return done / total * 100
  }

  renderContent() {
    if (this.state.gameEnded) {
      if (this.state.guessedCorrectly + this.state.guessedIncorrectly === 0) {
        return <Redirect to="/home" push />
      }
      return <LearnResult result={this.state} onComplete={this.endPractice} />
    } else if (this.state.isLoading) {
      return <GameLoading />
    } else {
      if (this.state.current.game === BUILDER_GAME) {
        return (
          <WordBuilderGame
            key={this.state.current.id}
            word={this.state.current.word}
            getNextWord={this.getNext}
          />
        )
      } else if (this.state.current.game === TYPEIN_GAME) {
        return (
          <TypeInGame
            key={this.state.current.id}
            word={this.state.current.word}
            getNextWord={this.getNext}
          />
        )
      } else {
        throw Error('Unknown game type')
      }
    }
  }

  render() {
    return (
      <Container>
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
            {this.renderContent()}
          </Widget>
        </Column>
      </Container>
    )
  }
}

export default withRouter(Practice)
