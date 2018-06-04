// @flow

export type IProps = {|
  doesAutoplay?: boolean,
  audioUrl?: string,
  size: string,
  isVisible: boolean,
  handleStop: Function,
  handlePlay: Function,
  playStatus: string,
  setPlayStatus: Function,
|}
