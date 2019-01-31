import React, { SFC } from 'react'
import Sound, { PlayStatus } from 'react-sound'
import { withState, withHandlers, defaultProps, compose } from 'recompose'
import { ButtonContainer } from './styled'
import Icon from 'components/Icon'

interface IOuterProps {
  doesAutoplay?: boolean
  audioUrl?: string
  size?: string
  isVisible: boolean
}

interface IState {
  playStatus: PlayStatus
  setPlayStatus: (playStatus: PlayStatus) => void
}

interface IHandlers {
  handleStop: () => void
  handlePlay: () => void
}

type IInnerProps = IOuterProps & IHandlers & IState

const SoundButton: SFC<IInnerProps> = ({
  audioUrl,
  handleStop,
  handlePlay,
  playStatus,
  isVisible,
  size,
}) => (
  audioUrl && (
    <ButtonContainer size={size} isVisible={isVisible}>
      <Sound
        url={audioUrl}
        playStatus={playStatus}
        onFinishedPlaying={handleStop}
      />
      <div onClick={handlePlay}>
        <Icon icon={playStatus === PlayStatus.Paused ? 'pause-circle-o' : 'play-circle-o'} />
      </div>
    </ButtonContainer>
  )
)

export default compose<IInnerProps, IOuterProps>(
  defaultProps({
    doesAutoplay: false,
    audioUrl: '',
  }),
  withState(
    'playStatus', 'setPlayStatus',
    (props: IOuterProps) => props.doesAutoplay ? PlayStatus.Playing : PlayStatus.Stopped
  ),
  withHandlers<IInnerProps, IHandlers>({
    handleStop: ({ setPlayStatus }) => () => {
      setPlayStatus(PlayStatus.Stopped)
    },
    handlePlay: ({ setPlayStatus, playStatus }) => () => {
      if (playStatus === PlayStatus.Stopped) {
        setPlayStatus(PlayStatus.Playing)
      }
    },
  })
)(SoundButton)
