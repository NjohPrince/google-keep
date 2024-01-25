import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import notesSlice from '../features/notes/notes.slice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, notesSlice)

const combinedRootReducers = {
  notesSlice: persistedReducer,
}

export default combinedRootReducers
