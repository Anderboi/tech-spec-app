import React from 'react'
import CustomDivider from '../base/Divider'
import PageSubheader from '../base/page_subheader/page_subheader'
import style from './pageLayout.module.scss'

interface Props {
  title: string
  children: React.ReactNode
}

const PageLayout: React.FunctionComponent<Props> = ({title, children}) => {
  return (
    <>
      <PageSubheader title={title} />
      <CustomDivider className={style.divider} />
			{children}

    </>
  )
}

export default PageLayout
