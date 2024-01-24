import React from 'react'

import styles from './input.module.css'

import { InputProps } from './input.type'

const InputAtom: React.FC<InputProps> = ({
  type = 'text',
  id,
  placeholder,
  ariaLabel,
  ariaDescribedBy,
  autoComplete = 'off',
  iconLeft,
  name,
  onChange,
  value,
}) => {
  return (
    <input
      className={`${styles.input} ${iconLeft ? styles.has__icon : ''}`}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      autoComplete={autoComplete}
      onChange={onChange}
      value={value}
    />
  )
}

export default InputAtom
