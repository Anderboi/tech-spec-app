import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { TiStarOutline } from "react-icons/ti";
import style from "./page_subheader.module.scss";
import Button from '../inputs/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  title: string;
}

const PageSubheader = ({ title }: Props) => {
  const router = useRouter()
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>{title}</h1>
        <span>Create and manage projects.</span>
      </div>
        <Button mode='action' onClick={()=>router.push('/AddProject')}>+ New project</Button>
      {/* <div className={style.iconsBlock}> */}
        {/* <MdOutlineAddBox className={style.icon} />
        <IoSearch className={style.icon} />
        <TiStarOutline className={style.icon} /> */}
      {/* </div> */}
    </div>
  );
};

export default PageSubheader;
