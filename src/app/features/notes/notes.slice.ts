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
      const notes = action.payload.note.archived === true ? state.archivedNotes : state.notes
      notes.push(action.payload.note)

      if (action.payload.note.archived === true) {
        state.archivedNotes = notes
      } else {
        state.notes = notes
      }
    },
    deleteNote: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload
      const note = state.deletedNotes.find(note => note.id === id)
      if (note) {
        const index = state.deletedNotes.indexOf(note)
        state.deletedNotes.splice(index, 1)
      }
    },
    addImage: (state, action: PayloadAction<{ id: number; image: string }>) => {
      const { id, image } = action.payload

      const note = state.notes.find(note => note.id === id)

      if (note) {
        const index = state.notes.indexOf(note)

        note.hasImage = true
        note.image = image

        state.notes[index] = note
      }
    },
    controlNotePin: (state, action: PayloadAction<{ id: number; value: boolean }>) => {
      const { id, value } = action.payload
      const note = state.notes.find(note => note.id === id)

      if (note) {
        const index = state.notes.indexOf(note)

        note.pinned = value
        state.notes[index] = note
      }
    },
    editColor: (state, action: PayloadAction<{ id: number; color: string }>) => {
      const { id, color } = action.payload
      const note = state.notes.find(note => note.id === id)

      if (note) {
        const index = state.notes.indexOf(note)

        note.backgroundColor = color

        state.notes[index] = note
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
        const note = { ...state.notes[noteIndexInNotes], archived: true }
        const notes = state.notes.filter((_, index) => index !== noteIndexInNotes)
        const archivedNotes = [...state.archivedNotes, note]

        state.notes = notes
        state.archivedNotes = archivedNotes
      } else if (operation === 'restore' && noteIndexInArchivedNotes !== -1) {
        // restore a note from archivedNotes to notes
        const note = { ...state.archivedNotes[noteIndexInArchivedNotes], archived: false }
        const archivedNotes = state.archivedNotes.filter(
          (_, index) => index !== noteIndexInArchivedNotes,
        )
        const notes = [...state.notes, note]

        state.archivedNotes = archivedNotes
        state.notes = notes
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
        const notes = state.notes.filter((_, index) => index !== noteIndexInNotes)
        const deletedNotes = [...state.deletedNotes, note]

        state.notes = notes
        state.deletedNotes = deletedNotes
      } else if (operation === 'restore' && noteIndexInDeletedNotes !== -1) {
        // restore a note from deletedNotes to notes
        const note = state.deletedNotes[noteIndexInDeletedNotes]

        const deletedNotes = state.deletedNotes.filter(
          (_, index) => index !== noteIndexInDeletedNotes,
        )
        const notes = [...state.notes, note]

        state.deletedNotes = deletedNotes
        state.notes = notes
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
  editColor,
  addImage,
  controlNotePin,
} = notesSlice.actions
export default notesSlice.reducer
