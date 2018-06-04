// @flow
import React from 'react'
import { FavButton } from './styled'
import type { IProps } from './types'

const FavoriteButton = ({ isFavorite, onFavorite }: IProps) => (
  <FavButton
    success={isFavorite}
    title="Bookmark it"
    onClick={() => onFavorite(!isFavorite)}>
    <i className={`fa fa-${isFavorite ? 'check' : 'bookmark-o'}`}/>
  </FavButton>
)

export default FavoriteButton
