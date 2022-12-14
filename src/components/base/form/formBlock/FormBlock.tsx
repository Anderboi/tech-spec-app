import React from 'react'
import style from './FormBlock.module.scss'

interface Props {
  title: string
  children: React.ReactNode
}

const FormBlock: React.FunctionComponent<Props> = ({
  children,
  title,
}): JSX.Element => {
  return (
    <section>
      <h3>{title}</h3>
			<article className={style.container}>
      {children}

			</article>
    </section>
  )
}

export default FormBlock
