import Link from 'next/link';
import React from 'react';
import style from './sidebar.module.scss';
import Image from 'next/image';
import Searchbar from './base/searchbar';

function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <div className={style.logo_block}>
        <img
					src='../public/Logo_c.svg'
					alt='logo'
					// width={50}
					// height={56}
					/>
        <h1 className={style.logo__text}>Controla</h1>
      </div>
			<Searchbar/>
      <nav className='navigation'>
        <Link href={'/projectsPage'} className='navigation__item'>
          Projects
        </Link>
        <Link href={'/contactsPage'} className='navigation__item'>
          Projects
        </Link>
      </nav>

      <hr />
    </aside>
  );
}

export default Sidebar;
