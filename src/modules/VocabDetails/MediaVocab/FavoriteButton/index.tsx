import React, { SFC } from 'react'
import { FavButton } from './styled'
import Icon from 'components/Icon'

interface IOuterProps {
  isFavorite: boolean
  onFavorite: (isFavorite: boolean) => void
}

const FavoriteButton: SFC<IOuterProps> = ({ isFavorite, onFavorite }) => (
  <FavButton
    success={isFavorite}
    title="Bookmark it"
    onClick={() => onFavorite(!isFavorite)}>
    <Icon icon={isFavorite ? 'check' : 'bookmark-o'} />
  </FavButton>
)

export default FavoriteButton
