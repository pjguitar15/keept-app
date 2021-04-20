import React, { useContext, useRef } from 'react'
import styled from 'styled-components'

import { CreateEntry, TitleValue, TextAreaValue } from '../../context/CRUD'
import { Form as BForm, Button } from 'react-bootstrap'
const FormWrapper = styled.div`
  height: 100vh;
`
const Form = () => {
  const createEntry = useContext(CreateEntry)
  const [titleValue, setTitleValue] = useContext(TitleValue)
  const [textAreaValue, setTextAreaValue] = useContext(TextAreaValue)
  return (
    <FormWrapper>
      <h1 className='text-center mb-5'>How did your day go?</h1>
      <BForm onSubmit={createEntry} className='col-8 mx-auto'>
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
        {/* <BForm.Group>
          <BForm.Control as='file' placeholder='Enter title' />
        </BForm.Group> */}
        <Button variant='light' size='sm' type='submit'>
          Publish
        </Button>
      </BForm>
    </FormWrapper>
  )
}

export default Form
