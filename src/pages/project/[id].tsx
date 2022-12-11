import {useRouter} from 'next/router'
import React from 'react'
import style from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import GridLayout from './../../components/layouts/grid_layout'
import ProjectDataTabContainer from '../../components/tabs/ProjectDataTabContainer'
import {Project} from '../../types/types'

const Project: React.FunctionComponent<Project> = ({
  address,
  area,
  id,
  name = 'Project Name',
  stage,
  image,
  initDate = new Date().toLocaleString(),
}): JSX.Element => {
  const route = useRouter()

  return (
    <main className={style.main}>
      <section className={cn(style.header, style.section)}>
        <Image
          src={image ? image : '/images/blank.jpg'}
          alt='Project image'
          width={960}
          height={280}
          className={style.header__image}
					priority
        />
        <div className={style.textblock}>
          <h3 className={style.textblock__header}>{name}</h3>
          <span className={style.date}>{`initDate`}</span>
          <span>
            Address:{' '}
            <Link href={'#'} className={style.link}>
              {address}
            </Link>
          </span>
          <span>
            Area: <span>{area}</span>
          </span>
          <span>Client:</span>
          <span>Team: </span>
        </div>
      </section>
      <section className={style.section}>
        {/* <div className={style.subheader}>
          <h3>Categories</h3>
          <Link href={'#'} className={style.link}>
            See all
          </Link>
        </div> */}
        <ProjectDataTabContainer />
      </section>
      <section className={style.section}>
        <div className={style.subheader}>
          <h3>Gallery</h3>
          <Link href={'#'} className={style.link}>
            See all
          </Link>
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
