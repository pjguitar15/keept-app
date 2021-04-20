import React from 'react'
import Form from './Form.jsx'
import styled from 'styled-components'
import logo from '../../Assets/SVG/logo.svg'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const CreatePageWrapper = styled.div`
  background: #009081;
  color: white;
`
const CreatePage = () => {
  return (
    <CreatePageWrapper>
      <Container>
        <div>
          <img
            style={{ width: '6rem', margin: '2rem 0' }}
            src={logo}
            alt='logo'
          />
        </div>
        <Link className='btn btn-outline-light btn-sm mt-2' to='/diary'>
          Back
        </Link>
        <Form />
      </Container>
    </CreatePageWrapper>
  )
}

export default CreatePage
