import React from 'react'
import style from './MainContentBlock.module.scss'

interface Props {
  children: React.ReactNode;
}

const MainContentBlock: React.FunctionComponent<Props> = ({children}):JSX.Element => {
  return <main className={style.mainBlock}>{children}</main>;
};

export default MainContentBlock