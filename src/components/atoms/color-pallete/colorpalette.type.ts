import React from 'react'

import { NoteType } from '../../../types/models/note.model'
import { NumberLiteralType } from 'typescript'

export type ColorPaletteProps = {
  setNote?: React.Dispatch<React.SetStateAction<NoteType>>
  note?: NoteType
  id?: number
}
