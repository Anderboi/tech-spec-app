import React, {useState} from 'react'
import style from './tab_data_item.module.scss'
import {IoIosArrowDown} from 'react-icons/io'
import cn from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
}

const TabDataItem: React.FunctionComponent<Props> = ({
  children = 'Some Text',
  className,
}) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={style.container}>
      <div className={style.container__head} onClick={handleOpen}>
        <span className={style.header}>{children}</span>
        <IoIosArrowDown className={style.icon} />
      </div>
      <div className={cn(style.container__body, {[style.active]: open})}>
          <article className={style.data}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
            dolores? Alias error rem aspernatur. Ratione at dolorem commodi a
            laudantium fugit earum voluptatum quasi accusamus, veritatis quae,
            ab, excepturi adipisci?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
            dolores? Alias error rem aspernatur. Ratione at dolorem commodi a
            laudantium fugit earum voluptatum quasi accusamus, veritatis quae,
            ab, excepturi adipisci?
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

export default TabDataItem
