import React, { SFC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'components/Generic'

interface IOuterProps {
  isAuthenticated: boolean
  hasStudyItems: boolean
  vocabId: string
}

const PracticeButton: SFC<IOuterProps> = ({
  isAuthenticated,
  vocabId,
  hasStudyItems,
}) => (
  <Link to={isAuthenticated ? `/practice/${vocabId}` : '/signin'}>
    <Button primary block disabled={isAuthenticated && !hasStudyItems}>
      {isAuthenticated ? 'Practice' : 'Sign in to practice'}
    </Button>
  </Link>
)

export default PracticeButton
