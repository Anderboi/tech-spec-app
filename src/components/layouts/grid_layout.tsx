import React from 'react';
import style from './grid_layout.module.scss';

interface Props {
	children: React.ReactNode
}

const GridLayout: React.FunctionComponent<Props> = ({children}):JSX.Element => {
	return (
		<div className={style.container}>{children}</div>
	)
}

export default GridLayout