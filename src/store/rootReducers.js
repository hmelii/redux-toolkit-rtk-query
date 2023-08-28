import { combineReducers } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { reducer as userReducer } from './user/user.slice'

console.log('userReducer', userReducer)

const rootReducers = combineReducers({
  favorites: favoritesReducer,
  user: userReducer
})

export default rootReducers
