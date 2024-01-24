export type InputProps = {
  type?: string
  id: string
  placeholder?: string
  ariaLabel?: string
  ariaDescribedBy?: string
  autoComplete?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  iconLeft?: boolean
  name?: string
}
