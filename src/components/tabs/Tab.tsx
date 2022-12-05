import React from 'react'
import Link from 'next/link'
import style from './tab.module.scss'
import cn from 'classnames'

interface Props {
  href: any
  children: React.ReactNode
  selected: boolean
  icon: React.ReactElement
}

const Tab: React.FunctionComponent<Props> = ({
  icon,
  href,
  children,
  selected,
}) => {
  return (
      <Link className={cn(style.tab, {[style.selected]: selected})} href={href}>
        {icon}
        {children}
      </Link>
  )
}

export default Tab
