import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type InitialStateType = {
  active: boolean
}

export const initialState: InitialStateType = {
  active: true,
}

const sidebarSlice = createSlice({
  name: 'sidebarSlice',
  initialState: initialState,
  reducers: {
    toggleState: (state, action: PayloadAction<{ active: boolean }>) => {
      state.active = action.payload.active
    },
  },
  extraReducers: builder => {
    builder
  },
})

export const { toggleState } = sidebarSlice.actions
export default sidebarSlice.reducer
