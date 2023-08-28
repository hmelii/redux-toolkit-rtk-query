import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const { payload: receipt } = action
      const findedIndex = state.findIndex(({ id }) => id === receipt.id)
      if (findedIndex > -1) {
        state.splice(findedIndex, 1)
      } else {
        state.push(receipt)
      }
    }
  }
})
export const { actions, reducer } = favoritesSlice
