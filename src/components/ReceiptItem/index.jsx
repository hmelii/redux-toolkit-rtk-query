import React from 'react'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import useActions from '../../hooks/useActions'
import useFavorites from '../../hooks/useFavorites'

const ReceiptItem = ({ receipt }) => {
  const { favorites } = useFavorites()
  const { toggleFavorites } = useActions()
  const isExists = favorites.some(({ id }) => id === receipt.id)

  return (
    <div className={styles.item}>
      <h2>{receipt.name}</h2>
      <button onClick={() => toggleFavorites(receipt)}>
        {isExists ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  )
}
export default ReceiptItem
