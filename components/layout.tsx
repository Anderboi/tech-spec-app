import Head from 'next/head';
import React from 'react';
import style from './layout.module.scss';
import Sidebar from './sidebar/sidebar';

const Layout = ({children}: any): JSX.Element => {
  return (
    <div className={style.layout_container}>
      <Head>
        <title>Project management app</title>
      </Head>
			<Sidebar/>
      <main className={style.main_block}>{children}</main>
    </div>
  );
}

export default Layout;
