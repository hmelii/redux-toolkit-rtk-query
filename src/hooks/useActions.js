import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import rootActions from '../store/rootActions'
import { bindActionCreators } from '@reduxjs/toolkit'

const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
export default useActions
