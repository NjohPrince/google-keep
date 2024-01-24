import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

import globals from '../../../lib/global/globals.module.css'
import styles from './searchinput.module.css'

import InputAtom from '../../atoms/input/Input.atom'
import { SearchInputProps } from './searchinput.type'

const SearchInputMolecule: React.FC<SearchInputProps> = ({ inputProps }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('Form submitted!')
  }

  return (
    <form
      role='search'
      autoComplete='off'
      className={`${styles.search__input} ${globals.flex} ${globals['a-center']}`}
      onSubmit={handleSubmit}
    >
      <div className={`${styles.icon}`}>
        <SearchOutlinedIcon />
      </div>
      <InputAtom {...inputProps} />
    </form>
  )
}

export default SearchInputMolecule
