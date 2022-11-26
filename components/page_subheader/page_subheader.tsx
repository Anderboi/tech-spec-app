import React from "react";
import {MdOutlineAddBox} from 'react-icons/md';
import {IoSearch} from 'react-icons/io5';
import {TiStarOutline} from 'react-icons/ti';
import style from './page_subheader.module.scss';

const PageSubheader = () => {
  return (
    <div className={style.container}>
      <h3 className={style.tiltle}>Projects</h3>
      <div className={style.iconsBlock}>
        <MdOutlineAddBox  className={style.icon}/>
        <IoSearch  className={style.icon}/>
        <TiStarOutline  className={style.icon}/>
      </div>
    </div>
  );
};

export default PageSubheader;
