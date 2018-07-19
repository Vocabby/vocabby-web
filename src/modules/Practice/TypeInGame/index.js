// @flow
import React, { Component, Fragment } from 'react'
import Mousetrap from 'mousetrap'
import Answer from 'components/Answer'
import SoundButton from 'components/SoundButton'
import { WidgetBody, WidgetFooter } from 'components/Generic'
import { equalWithoutAccents } from 'common/utils'
import { WordInput } from './styled'
import type { IWord } from 'common/types'

type IProps = {|
  word: IWord,
  getNextWord: boolean => void,
|}

type IState = {|
  answer: string,
  done: boolean,
|}

export default class TypeInGame extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = { answer: '', done: false }
  }

  componentDidMount() {
    Mousetrap.bind(['enter'], this.checkAnswer)
  }

  componentWillUnmount() {
    Mousetrap.reset()
  }

  checkAnswer = () => {
    if (this.state.done) {
      this.props.getNextWord(
        equalWithoutAccents(this.state.answer, this.props.word.title)
      )
    } else {
      this.setState({ ...this.state, done: true })
    }
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    if (!this.state.done) {
      this.setState({ ...this.state, answer: event.target.value })
    }
  }

  render() {
    return (
      <Fragment>
        <WidgetBody>
          <h1>{this.props.word.definition}</h1>
          {
            this.state.done ? (
              <div className="text-center">
                <SoundButton audioUrl={this.props.word.audioUrl} autoplay visible={false} />
                <Answer given={this.state.answer} correct={this.props.word.title} />
              </div>
            ) : (
              <p>
                <WordInput
                  type="text"
                  autoFocus
                  className="mousetrap"
                  autoCorrect="off"
                  autoCapitalize="off"
                  autoComplete="off"
                  spellCheck="false"
                  value={this.state.answer}
                  onChange={this.handleChange} />
              </p>
            )
          }
        </WidgetBody>
        <WidgetFooter>
          <button type="submit" className="btn btn-primary" onClick={this.checkAnswer}>
            {this.state.done ? 'Continue' : 'Check answer'}
          </button>
        </WidgetFooter>
      </Fragment>
    )
  }
}
