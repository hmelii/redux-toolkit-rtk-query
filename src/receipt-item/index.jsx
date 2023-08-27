import React from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/favorites/favorites.slice'

const ReceiptItem = ({ receipt }) => {
  const favorites = useSelector(({ favorites }) => favorites)
  const dispatch = useDispatch()
  console.log(favorites)
  const isExists = favorites.some(({ id }) => id === receipt.id)

  return (
    <div className={styles.item}>
      <h2>{receipt.name}</h2>
      <button onClick={() => dispatch(actions.toggleFavorites(receipt))}>
        {isExists ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  )
}
export default ReceiptItem
