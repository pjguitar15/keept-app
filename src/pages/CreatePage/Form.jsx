import React, { useContext } from 'react'
import styled from 'styled-components'

import {
  CreateEntry,
  NameValue,
  TitleValue,
  TextAreaValue
} from '../../context/CRUD'
import { Form as BForm, Button } from 'react-bootstrap'
const FormWrapper = styled.div`
  height: 100vh;
`
const Form = () => {
  const createEntry = useContext(CreateEntry)
  const [nameValue, setNameValue] = useContext(NameValue)
  const [titleValue, setTitleValue] = useContext(TitleValue)
  const [textAreaValue, setTextAreaValue] = useContext(TextAreaValue)
  return (
    <FormWrapper>
      <h1 className='text-center mb-5'>How did your day go?</h1>
      <BForm onSubmit={createEntry} className='col-xl-8 col-xs-12 mx-auto'>
        <BForm.Group>
          <BForm.Control
            value={nameValue}
            onChange={e => setNameValue(e.target.value)}
            placeholder='Who are you?'
          />
        </BForm.Group>
        <BForm.Group>
          <BForm.Control
            value={titleValue}
            onChange={e => setTitleValue(e.target.value)}
            placeholder='Describe your day in few words'
          />
        </BForm.Group>
        <BForm.Group>
          <BForm.Control
            style={{ height: '15rem' }}
            value={textAreaValue}
            onChange={e => setTextAreaValue(e.target.value)}
            as='textarea'
            placeholder='Tell me more about it'
          />
        </BForm.Group>

        <Button variant='light' size='sm' type='submit'>
          Publish
        </Button>
      </BForm>
    </FormWrapper>
  )
}

export default Form
