import React from 'react'
import style from './input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<InputProps> = ({...props}) => {
	return (
		<input {...props} className={style.input}/>
	)
}

export default Input