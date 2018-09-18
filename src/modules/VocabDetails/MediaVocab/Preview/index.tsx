import React, { SFC } from 'react'
import YouTube from 'react-youtube'
import { VideoContainer } from './styled'

interface IOuterProps {
  mediaUrl: string
}

const Preview: SFC<IOuterProps> = ({ mediaUrl }) => (
  <VideoContainer>
    <YouTube videoId={mediaUrl.split('=')[1]} opts={{ width: '100%' }} />
  </VideoContainer>
)

export default Preview
