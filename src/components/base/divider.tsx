import React, {DetailedHTMLProps, HTMLAttributes} from 'react'
import style from './divider.module.scss'
import cn from 'classnames'

export interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Divider: React.FC<DividerProps> = ({
  className,
  ...props
}): JSX.Element => {
  return <div className={cn(style.main, className)} />
}

export default Divider
