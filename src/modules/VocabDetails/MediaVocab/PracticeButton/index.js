// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import type { IProps } from './types'
import { Button } from 'components/Generic'

const PracticeButton = ({
  isAuthenticated,
  vocabId,
  hasStudyItems,
}: IProps) => (
  <Link to={isAuthenticated ? `/practice/${vocabId}` : '/signin'}>
    <Button primary disabled={isAuthenticated && !hasStudyItems}>
      {isAuthenticated ? 'Practice' : 'Sign in to practice'}
    </Button>
  </Link>
)

export default PracticeButton
