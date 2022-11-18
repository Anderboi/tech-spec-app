import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import style from './layout.module.scss';
import Sidebar from './sidebar';

function Layout({children}: any) {
  return (
    <div className={style.layout_container}>
      <Head>
        <title>Project management app</title>
      </Head>
			<Sidebar></Sidebar>
      <main className={style.container}>{children}</main>
    </div>
  );
}

export default Layout;
