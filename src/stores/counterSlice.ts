import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
  value: 4
}

// Create the counter slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // This action increments the counter by 1
    increment: (state) => {
      state.value += 1
    }
  }
})

// Export the action creator
export const { increment } = counterSlice.actions

// Export the reducer
export default counterSlice.reducer
