import React from 'react';
import style from './button.module.scss';

function Button(name: string) {
  return (
    <button className={style.btn}>{name}</button>
  )
}

export default Button