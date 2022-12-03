import React from 'react'
import Divider from '../base/divider'
import PageSubheader from '../page_subheader/page_subheader'
import style from './pageLayout.module.scss'

interface Props {
  title: string
  children: React.ReactNode
}

const PageLayout: React.FunctionComponent<Props> = ({title, children}) => {
  return (
    <>
      <PageSubheader title={title} />
      <Divider className={style.divider} />
			{children}

    </>
  )
}

export default PageLayout
