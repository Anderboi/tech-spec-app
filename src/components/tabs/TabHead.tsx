import React from 'react'


interface Props {
  children: React.ReactNode;
	className?: string;
}

const TabHead: React.FunctionComponent<Props> = ({children, className}): JSX.Element => {
  return <article className={className}>{children}</article>
}

export default TabHead
