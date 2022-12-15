import React from 'react'
import style from './button.module.scss'
import cn from 'classnames'

// type Type = ;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  mode: 'ghost' | 'action' | 'ghost_accent'
}

const Button: React.FC<ButtonProps> = ({children, mode}): JSX.Element => {
  return (
    <button
      className={cn(
        style.btn,
        {[`${style.ghost}`]: mode === 'ghost'},
        {[`${style.action}`]: mode === 'action'},
        {[`${style.ghost_accent}`]: mode === 'ghost_accent'}
      )}
    >{children}</button>
  )
}

export default Button;
