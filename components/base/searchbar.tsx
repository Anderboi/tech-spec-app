import React from 'react';
import style from './searchbar.module.scss';
import cn from 'classnames';

function Searchbar() {
  return <input className={cn(style.input, style.search)} type='search' />;
}

export default Searchbar;
