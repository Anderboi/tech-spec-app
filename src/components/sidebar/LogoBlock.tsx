import React from 'react';
import Image from "next/legacy/image";
import style from './logo_block.module.scss';

export const Logo_block = () => {
  return (
    <div className={style.logo_block}>
        <Image src="/Logo_c.svg" alt="logo" width={30} height={30} />
        <span className={style.logo__text}>Controla</span>
      </div>
  )
}
