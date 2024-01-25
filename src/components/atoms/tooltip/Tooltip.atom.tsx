import React from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './tooltip.module.css'

import { TooltipProps } from './tooltip.type'

const TooltipAtom: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div
      className={`${styles.tooltip} ${globals['full-width']}} ${globals.flex} ${globals['center-items']}`}
    >
      <span>{text}</span>
    </div>
  )
}

export default TooltipAtom
