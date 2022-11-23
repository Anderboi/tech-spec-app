import React from 'react';
import Image from "next/image";
import style from './logo_block.module.scss';

export const Logo_block = () => {
  return (
    <div className={style.logo_block}>
        <Image src="/Logo_c.svg" alt="logo" width={50} height={56} />
        <h1 className={style.logo__text}>Controla</h1>
      </div>
  )
}
