import React from 'react'

import globals from '../../../lib/global/globals.module.css'
import styles from './icontooltip.module.css'

import TooltipAtom from '../../atoms/tooltip/Tooltip.atom'
import { IconTooltipProps } from './icontooltip.type'

const IconTooltipMolecule: React.FC<IconTooltipProps> = ({
  icon,
  tooltipProps,
  tooltipPosition,
  onKeyDown,
  darker,
  small,
  operation,
}) => {
  return (
    <div
      role='button'
      tabIndex={0}
      onKeyDown={onKeyDown}
      onClick={operation}
      className={`${styles.icon__element} ${small ? styles.small : ''} ${darker ? styles.dark : ''} ${globals.flex} ${globals['center-items']}`}
    >
      {icon}
      <div
        className={`${styles.tooltip} ${tooltipPosition === 'right' && styles.right} ${tooltipPosition === 'center' && styles.center} ${tooltipPosition === 'left' && styles.left}`}
      >
        <TooltipAtom {...tooltipProps} />
      </div>
    </div>
  )
}

export default IconTooltipMolecule
