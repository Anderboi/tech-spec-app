import React from 'react'
import TabDataItem from '../../tabs/TabDataItem'

interface Props {
  children: React.ReactNode
  className?: string
}

const TabContent: React.FunctionComponent<Props> = ({children}):JSX.Element => {
  return (
    <>
    {children}
    </>
  )
}

export default TabContent
