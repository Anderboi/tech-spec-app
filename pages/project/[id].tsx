import { useRouter } from 'next/router'
import React from 'react'

const Project = () => {

	const route = useRouter()

	return (
		<div>{route.asPath}</div>
	)
}

export default Project