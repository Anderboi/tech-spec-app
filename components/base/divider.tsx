import React from 'react';
import style from './divider.module.scss';
import { IDivider } from "./divider.props";
import cn from 'classnames';


const Divider = ({className, ...props}: IDivider) => {
  return (
    <div className={cn(style.main, className)}/>
  )
}

export default Divider