// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import type { IProps } from './types'
import { Button } from 'components/Generic'

const PracticeButton = ({
  isSignedIn,
  vocabId,
  hasStudyItems,
}: IProps) => (
  <Link to={isSignedIn ? `/practice/${vocabId}` : '/signin'}>
    <Button primary disabled={isSignedIn && !hasStudyItems}>
      {isSignedIn ? 'Practice' : 'Sign in to practice'}
    </Button>
  </Link>
)

export default PracticeButton
