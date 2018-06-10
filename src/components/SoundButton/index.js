// @flow
import React from 'react'
import Sound from 'react-sound'
import { withState, withHandlers, defaultProps, compose } from 'recompose'
import Icon from 'components/Icon'
import { ButtonContainer } from './styled'

type IProps = {|
  doesAutoplay?: boolean,
  audioUrl?: string,
  size: string,
  isVisible: boolean,
  handleStop: Function,
  handlePlay: Function,
  playStatus: string,
  setPlayStatus: Function,
|}

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
        <Icon icon={playStatus === Sound.status.PLAYING ? 'pause-circle-o' : 'play-circle-o'} />
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
    (props: IProps) => props.doesAutoplay ? Sound.status.PLAYING : Sound.status.STOPPED,
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
