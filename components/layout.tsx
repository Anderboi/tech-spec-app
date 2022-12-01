import Head from 'next/head';
import React from 'react';
import style from './layout.module.scss';
import Sidebar from './sidebar/sidebar';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({children}): JSX.Element => {
  return (
    <div className={style.layoutContainer}>
      <Sidebar />
      <main className={style.mainBlock}>{children}</main>
    </div>
  );
};

export default Layout;
