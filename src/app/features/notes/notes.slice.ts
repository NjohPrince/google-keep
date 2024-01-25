import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { NoteType } from '../../../types/models/note.model'

type InitialStateType = {
  notes: NoteType[]
  archivedNotes: NoteType[]
  deletedNotes: NoteType[]
}

export const initialState: InitialStateType = {
  notes: [],
  archivedNotes: [],
  deletedNotes: [],
}

const notesSlice = createSlice({
  name: 'notesSlice',
  initialState: initialState,
  reducers: {
    resetNotesState: state => {
      state.notes = []
      state.archivedNotes = []
      state.deletedNotes = []
    },
    createNewNote: (state, action: PayloadAction<{ note: NoteType }>) => {
      const notes = state.notes
      notes.push(action.payload.note)
      state.notes = notes
    },
    deleteNote: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload
      const note = state.deletedNotes.find(note => note.id === id)
      if (note) {
        const index = state.deletedNotes.indexOf(note)
        state.deletedNotes.splice(index, 1)
      }
    },
    archiveOrRestoreNote: (
      state,
      action: PayloadAction<{ id: number; operation: 'restore' | 'archive' }>,
    ) => {
      const { id, operation } = action.payload

      // find the note and its index in the respective array
      const noteIndexInNotes = state.notes.findIndex(note => note.id === id)
      const noteIndexInArchivedNotes = state.archivedNotes.findIndex(note => note.id === id)

      if (operation === 'archive' && noteIndexInNotes !== -1) {
        // archive a note from notes to archivedNotes
        const note = state.notes[noteIndexInNotes]
        state = {
          ...state,
          notes: state.notes.filter((_, index) => index !== noteIndexInNotes),
          archivedNotes: [...state.archivedNotes, note],
        }
      } else if (operation === 'restore' && noteIndexInArchivedNotes !== -1) {
        // restore a note from archivedNotes to notes
        const note = state.archivedNotes[noteIndexInArchivedNotes]
        state = {
          ...state,
          archivedNotes: state.archivedNotes.filter(
            (_, index) => index !== noteIndexInArchivedNotes,
          ),
          notes: [...state.notes, note],
        }
      }
    },
    softDeleteOrRestoreNote: (
      state,
      action: PayloadAction<{ id: number; operation: 'restore' | 'softDelete' }>,
    ) => {
      const { id, operation } = action.payload

      // find the note and its index in the respective arrays
      const noteIndexInNotes = state.notes.findIndex(note => note.id === id)
      const noteIndexInDeletedNotes = state.deletedNotes.findIndex(note => note.id === id)

      if (operation === 'softDelete' && noteIndexInNotes !== -1) {
        // soft delete a note from notes to deletedNotes
        const note = state.notes[noteIndexInNotes]
        state = {
          ...state,
          notes: state.notes.filter((_, index) => index !== noteIndexInNotes),
          deletedNotes: [...state.deletedNotes, note],
        }
      } else if (operation === 'restore' && noteIndexInDeletedNotes !== -1) {
        // restore a note from deletedNotes to notes
        const note = state.deletedNotes[noteIndexInDeletedNotes]
        state = {
          ...state,
          deletedNotes: state.deletedNotes.filter((_, index) => index !== noteIndexInDeletedNotes),
          notes: [...state.notes, note],
        }
      }
    },
  },
  extraReducers: builder => {
    builder
  },
})

export const {
  resetNotesState,
  createNewNote,
  archiveOrRestoreNote,
  deleteNote,
  softDeleteOrRestoreNote,
} = notesSlice.actions
export default notesSlice.reducer
