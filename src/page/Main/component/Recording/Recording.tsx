import React from 'react'
import { usePracticeStore } from '../../../../Store/usePracticeStore'

const Recording: React.FC = () => {
  const {
    currentSentence,
  } = usePracticeStore()

  return (
    <div>
      {currentSentence}
    </div>
  )
}

export default Recording
