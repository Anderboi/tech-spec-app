import React from 'react'
import FormBlock from '../components/base/form/formBlock/FormBlock'
import LinkButton from '../components/base/LinkButton'
import style from './addProject.module.scss'
import Button from './../components/base/inputs/Button'
import Input from '../components/base/inputs/Input'

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

    const JSONdata = JSON.stringify(data)

    const endpoint = 'api/createProject'

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()
    console.log(result)

    alert(result.data)
  }

  return (
    <div className={style.container}>
      <h1>Create New Project</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <FormBlock title='Project Info'>
          <div className={style.input__container}>
            <Input
              type='text'
              placeholder='Name'
              name='name'
              id='name'
              className={style.input}
              required
            />
            <Input
              type='number'
              placeholder='Area'
              name='area'
              id='area'
              min={1}
              className={style.input}
            />
          </div>
          <Input
            type='text'
            placeholder='Address'
            id='address'
            name='address'
            className={style.input}
            required
          />
        </FormBlock>
        {/* <FormBlock title='Client'>
        <div className={style.input__container}>
          <Input placeholder='Invite by name or email' />{' '}
          <Button mode='action'>Invite</Button>
        </div>
        </FormBlock>
        <FormBlock title='Designers'>
        <div className={style.input__container}>
          <Input placeholder='Invite by name or email' />{' '}
          <Button mode='action'>Invite</Button>
        </div>
        </FormBlock> */}
        <LinkButton href={'#'}>+ Add Client</LinkButton>
        <LinkButton href={'#'}>+ Add Designer</LinkButton>

        <div className={style.buttonBlock}>
          <Button mode='ghost'>Cancel</Button>
          <Button mode='action'>Create</Button>
        </div>
        {/* <FormBlock title='Client Info'>
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
        </FormBlock> */}
      </form>
    </div>
  )
}

export default AddProject
