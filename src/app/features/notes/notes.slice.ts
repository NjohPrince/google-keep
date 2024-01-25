import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  title: '',
}

const notesSlice = createSlice({
  name: 'notesSlice',
  initialState: initialState,
  reducers: {
    resetNotesState: state => {
      state.title = ''
    },
  },
  extraReducers: builder => {
    builder
  },
})

export const { resetNotesState } = notesSlice.actions
export default notesSlice.reducer
