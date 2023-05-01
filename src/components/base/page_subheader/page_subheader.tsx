import React from "react";
import {MdOutlineAddBox} from 'react-icons/md';
import {IoSearch} from 'react-icons/io5';
import {TiStarOutline} from 'react-icons/ti';
import style from './page_subheader.module.scss';

interface Props {
  title: string
}

const PageSubheader = ({title}: Props) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.iconsBlock}>
        <MdOutlineAddBox  className={style.icon}/>
        <IoSearch  className={style.icon}/>
        <TiStarOutline  className={style.icon}/>
      </div>
    </div>
  );
};

export default PageSubheader;
