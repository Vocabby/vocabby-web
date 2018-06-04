// @flow
import React, { Component } from 'react'
import Sound from 'react-sound'
import { withState, withHandlers, defaultProps, compose } from 'recompose'

import { ButtonContainer } from './styled'
import type { IProps } from './types'

const SoundButton = ({
  audioUrl,
  handleStop,
  handlePlay,
  playStatus,
  isVisible,
  size,
}: IProps) => (
  audioUrl && (
    <ButtonContainer size={size} isVisible={isVisible}>
      <Sound
        url={audioUrl}
        playStatus={playStatus}
        onFinishedPlaying={handleStop}
      />
      <div onClick={handlePlay}>
        <i className={`fa ${
          playStatus === Sound.status.PLAYING
            ? 'fa-pause-circle-o'
            : 'fa-play-circle-o'
        }`} />
      </div>
    </ButtonContainer>
  )
)

export default compose(
  defaultProps({
    doesAutoplay: false,
    audioUrl: '',
  }),
  withState(
    'playStatus', 'setPlayStatus',
    (props: IProps) => props.doesAutoplay ? Sound.status.PLAYING : Sound.status.STOPPED
  ),
  withHandlers({
    handleStop({ setPlayStatus }: IProps) {
      setPlayStatus(() => Sound.status.STOPPED)
    },
    handlePlay({ setPlayStatus, playStatus }: IProps) {
      if (playStatus === Sound.status.STOPPED) {
        this.setPlayStatus(() => Sound.status.PLAYING)
      }
    }
  })
)(SoundButton)
