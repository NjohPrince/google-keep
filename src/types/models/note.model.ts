export type NoteType = {
  id: number
  hasImage: boolean
  title: string
  description: string
  hasDrawing: boolean
  label: string
  backgroundColor: string
  checkBoxes: string[]
  hasCheckBoxes: boolean
  archived: boolean
  image?: string
  pinned?: boolean
  deleted?: boolean
}
