import { createSlice } from '@reduxjs/toolkit'
import { getUserById } from './user.actions'

const initialState = {
  loading: false,
  error: null,
  user: {}
}

console.log('getUserById', getUserById)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
        state.user = {}
      })
  }
})

export const { actions, reducer } = userSlice
