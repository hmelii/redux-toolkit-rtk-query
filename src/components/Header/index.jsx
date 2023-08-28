import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import React from 'react'
import styles from './styles.module.css'
import useFavorites from '../../hooks/useFavorites'
const Header = () => {
  const { favorites } = useFavorites()

  return (
    <header className={styles.header}>
      <BsFillBookmarkHeartFill />
      <span>{favorites.length}</span>
    </header>
  )
}
export default Header
