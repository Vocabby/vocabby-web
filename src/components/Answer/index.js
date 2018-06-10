// @flow
import React, { Fragment } from 'react'
import { AnswerContainer, AccentedChar } from './styled'
import { equalWithoutAccents } from 'common/utils'

type IProps = {|
  +given: string,
  +correct: string,
|}

const Answer = ({ given, correct }: IProps) => (
  <AnswerContainer>
    {
      equalWithoutAccents(correct, given) ? (
        <Fragment>
          <i className="fa fa-check text-success animated fadeInUp"/>
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
          <i className="fa fa-close text-danger animated rotateIn"/>
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
