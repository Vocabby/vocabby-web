// @flow
import React from 'react'
import { FavButton } from './styled'
import Icon from 'components/Icon'

type IProps = {
  isFavorite: boolean,
  onFavorite: boolean => void,
}

const FavoriteButton = ({ isFavorite, onFavorite }: IProps) => (
  <FavButton
    success={isFavorite}
    title="Bookmark it"
    onClick={() => onFavorite(!isFavorite)}>
    <Icon icon={isFavorite ? 'check' : 'bookmark-o'} />
  </FavButton>
)

export default FavoriteButton
