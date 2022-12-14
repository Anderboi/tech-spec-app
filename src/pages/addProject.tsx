import React from 'react'
import FormBlock from '../components/base/form/formBlock/FormBlock'
import style from './addProject.module.scss'

const AddProject = () => {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      name: {value: string}
      area: {value: number}
      address: {value: string}
    }

    const name = target.name.value
    const area = target.area.value
    const address = target.address.value

		const data = {
			name: name,
			area: area,
			address: address,
		}


    const JSONdata = JSON.stringify(data);

		const endpoint = 'api/createProject';

		const options = {
      method: 'POST',
			headers: {
        'Content-type': 'application/json',
			},
			body: JSONdata,
		}

		const response = await fetch(endpoint, options)

		const result = await response.json()
    console.log(result);

    alert(result.data)
  }

  return (
    <div className={style.container}>
      <h1>Create New Project</h1>
      <form  className={style.form} onSubmit={handleSubmit}>
        <FormBlock title='Project Info'>
          <div className={style.input__container}>
            <input
              type='text'
              placeholder='Name'
              name='name'
              id='name'
              className={style.input}
              required
            />
            <input
              type='number'
              placeholder='Area'
              name='area'
              id='area'
              className={style.input}
            />
          </div>
          <input
            type='text'
            placeholder='Address'
            id='address'
            name='address'
            className={style.input}
            required
          />
        </FormBlock>

        <FormBlock title='Client Info'>
          <div className={style.input__container}>
            <input
              type='text'
              id='first'
              placeholder='First Name'
              name='first'
              className={style.input}
            />
            <input
              type='text'
              id='last'
              placeholder='Last Name'
              name='last'
              className={style.input}
            />
          </div>
          <div className={style.input__container}>
            <input
              type='email'
              id='email'
              placeholder='Email'
              name='email'
              className={style.input}
            />
            <input
              type='tel'
              id='phone'
              placeholder='Phone Number'
              name='phone'
              className={style.input}
            />
          </div>
          <div className={style.buttonBlock}>
            <input type='button' value='Cancel' />
            <input type='submit' value='Create' />
          </div>
        </FormBlock>
      </form>
    </div>
  )
}

export default AddProject
