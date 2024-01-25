import React from 'react'

import { NoteType } from '../../../types/models/note.model'

export type EditorProps = {
  setEditorActive: React.Dispatch<React.SetStateAction<boolean>>
  editorActive: boolean
  setNote: React.Dispatch<React.SetStateAction<NoteType>>
  note: NoteType
}
