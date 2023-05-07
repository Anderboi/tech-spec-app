import Image from "next/legacy/image"
import React from 'react'
import style from './user_block.module.scss'
import {BsChevronExpand} from 'react-icons/bs'
import {useUser, useSupabaseClient} from '@supabase/auth-helpers-react'
import Link from 'next/link'

const UserBlock = () => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()

  return (
    <article className={style.container}>
      {user ? (
        <Image
          alt='avatar'
          height={44}
          width={44}
          src='/images/avatar.jpg'
          className={style.avatar}
        />
      ) : (
        <Image
          alt='avatar'
          height={44}
          width={44}
          src='/images/avatar.jpg'
          className={style.avatar}
        />
      )}
      <div className={style.infoBlock}>
        {user ? (
          <Link href='/AccountPage' className={style.name} legacyBehavior>{user?.id}</Link>
        ) : (
          <Link href='/LandingPage'>Sign In</Link>
        )}
        {user && <span className={style.email}>{user?.email}</span>}
      </div>
      <BsChevronExpand className={style.icon} />
    </article>
  );
}

export default UserBlock
