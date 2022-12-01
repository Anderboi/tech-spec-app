import Image from 'next/image'
import React from 'react'
import style from './user_block.module.scss'
import {BsChevronExpand} from 'react-icons/bs'

const UserBlock = () => {
  return (
    <article className={style.container}>
      <Image
        alt='avatar'
        height={44}
        width={44}
        src='/images/avatar.jpg'
        className={style.avatar}
      />
      <div className={style.infoBlock}>
        <span className={style.name}>John Doe</span>
        <span className={style.email}>email@gmail.com</span>
      </div>
      <BsChevronExpand className={style.icon} />
    </article>
  )
}

export default UserBlock
