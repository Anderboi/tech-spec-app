import {useRouter} from 'next/router'
import React from 'react'
import style from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import GridLayout from './../../components/layouts/grid_layout'

const Project = () => {
  const route = useRouter()

  return (
    <main className={style.main}>
      <section className={cn(style.header, style.section)}>
        <Image
          src={'/images/blank.jpg'}
          alt='Project image'
          width={960}
          height={280}
          className={style.header__image}
        />
        <div className={style.textblock}>
          <h3 className={style.textblock__header}>Project Name</h3>
          <span className={style.date}>11/03/2022</span>
          <span>Address: <Link href={'#'} className={style.link}>Recent address</Link></span>
          <span>Area</span>
          <span>Client</span>
          <span>Team</span>
        </div>
      </section>
			<section className={style.section}>
				<div className={style.subheader}>
					<h3>Categories</h3>
					<Link href={'#'} className={style.link}>See all</Link>
				</div>
				<article>
					<span>Project Data</span>
					<span>Drawings</span>
					<span>Materials</span>
					<span>Contacts</span>
				</article>
			</section>
			<section className={style.section}>
				<div className={style.subheader}>
					<h3>Gallery</h3>
					<Link href={'#'} className={style.link}>See all</Link>
				</div>
				<GridLayout>
					{/* <Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image>
					<Image src={'/images/blank.jpg'} alt='image' width={320} height={200}></Image> */}
				</GridLayout>
			</section>
    </main>
  )
}

export default Project
