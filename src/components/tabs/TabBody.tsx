import React from 'react'

interface Props {
  children: React.ReactNode;
	className?: string;
}

const TabBody: React.FunctionComponent<Props> = ({children, className}) => {
	return (
		<section className={className}>{children}</section>
	)
}

export default TabBody