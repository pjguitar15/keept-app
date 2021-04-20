import React from 'react'
import styled from 'styled-components'
import { Form as BForm, Button } from 'react-bootstrap'
const FormWrapper = styled.div`
  padding: 3rem;
`
const Form = () => {
  return (
    <FormWrapper>
      <h1 className='text-center mb-5'>Create an Entry</h1>
      <BForm className='col-8 mx-auto'>
        <BForm.Group>
          <BForm.Control placeholder='Enter title' />
        </BForm.Group>
        <BForm.Group>
          <BForm.Control as='textarea' placeholder='Main Content' />
        </BForm.Group>
        <BForm.Group>
          <BForm.Control as='file' placeholder='Enter title' />
        </BForm.Group>
        <Button>Publish</Button>
      </BForm>
    </FormWrapper>
  )
}

export default Form
