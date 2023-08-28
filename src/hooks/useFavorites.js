import { useSelector } from 'react-redux'

const useFavorites = () => {
  const favorites = useSelector(({ favorites }) => favorites)

  return { favorites }
}
export default useFavorites
