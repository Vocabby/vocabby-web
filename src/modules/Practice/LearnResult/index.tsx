// @flow
import React, { PureComponent } from 'react'
import Mousetrap from 'mousetrap'
import { getTitle } from './helpers'
import { WidgetBody, WidgetFooter } from 'components/Generic'

interface IOuterProps {
  onComplete: () => void
  correct: number
  incorrect: number
}

class LearnResult extends PureComponent<IOuterProps, {}> {
  componentDidMount() {
    Mousetrap.bind('enter', this.props.onComplete)
  }

  componentWillUnmount() {
    Mousetrap.reset()
  }

  render() {
    return (
      <div>
        <WidgetBody>
          <h1>{getTitle(this.props.correct, this.props.incorrect)}</h1>
          {
            this.props.incorrect === 0 && (
              <img src="/public/images/trophy.gif" alt="perfect game" />
            )
          }
          <div>
            <p>Correct: {this.props.correct}</p>
            <p>Wrong: {this.props.incorrect}</p>
          </div>
        </WidgetBody>
        <WidgetFooter>
          <button className="btn btn-primary" onClick={this.props.onComplete}>
            Finish practice
          </button>
        </WidgetFooter>
      </div>
    )
  }
}

export default LearnResult
