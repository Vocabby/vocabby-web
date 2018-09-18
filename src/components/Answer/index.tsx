import React, { Fragment, SFC } from 'react'
import { AnswerContainer, AccentedChar } from './styled'
import Icon from 'components/Icon'
import { equalWithoutAccents } from 'common/utils'

interface IOuterProps {
  given: string
  correct: string
}

const Answer: SFC<IOuterProps> = ({ given, correct }) => (
  <AnswerContainer>
    {
      equalWithoutAccents(correct, given) ? (
        <Fragment>
          <Icon icon="check" className="animated fadeInUp" success />{' '}
          <span>
            {
              correct.split('').map((char, index) =>
                given[index] === char
                  ? char
                  : <AccentedChar key={index}>{char}</AccentedChar>)
            }
          </span>
        </Fragment>
      ) : (
        <Fragment>
          <Icon icon="close" className="animated rotateIn" danger />{' '}
          {
            given && given.length > 0 ? (
              <strike>{given}</strike>
            ) : (
              <span>No answer given</span>
            )
          }
          <p>Correct answer: {correct}</p>
        </Fragment>
      )
    }
  </AnswerContainer>
)

export default Answer
