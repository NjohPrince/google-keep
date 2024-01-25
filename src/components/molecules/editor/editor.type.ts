import React from 'react'

export type EditorProps = {
  setEditorActive: React.Dispatch<React.SetStateAction<boolean>>
  editorActive: boolean
}
