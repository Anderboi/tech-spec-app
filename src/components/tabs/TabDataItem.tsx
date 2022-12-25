import React, {useState} from 'react'
import style from './tab_data_item.module.scss'
import {IoIosArrowDown} from 'react-icons/io'
import cn from 'classnames'

interface Props {
  title: string
  children: React.ReactNode
  className?: string
}

const TabContentItem: React.FunctionComponent<Props> = ({
  title = 'Some Text',
  children,
  className,
}) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={style.container}>
      <div className={style.container__head} onClick={handleOpen}>
        <span className={style.header}>{title}</span>
        <IoIosArrowDown className={cn(style.icon, {[`${style.icon_active}`]: open})} />
      </div>
      <div className={cn(style.container__body, {[`${style.active}`]: open})}>
          <article className={style.data}>
          {children}
          </article>
        </div>
      {/* {open && (
        <div className={style.container__body}>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
            dolores? Alias error rem aspernatur. Ratione at dolorem commodi a
            laudantium fugit earum voluptatum quasi accusamus, veritatis quae,
            ab, excepturi adipisci?
          </article>
        </div>
      )} */}
    </div>
  )
}

export default TabContentItem
