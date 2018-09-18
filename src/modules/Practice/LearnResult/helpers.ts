export const getTitle = (correct: number, incorrect: number) => {
  const percentage = correct / (correct + incorrect)
  if (percentage > 0.8) {
    return 'Great job!'
  } else if (percentage > 0.4) {
    return 'Not bad'
  }
  return 'You are a fucking loser'
}
