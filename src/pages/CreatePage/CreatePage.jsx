import React, { useEffect, useState } from 'react'
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
  const [dateNow, setDateNow] = useState('')
  useEffect(() => {
    const dateToString = new Date().toString()
    const sliced = dateToString.slice(0, dateToString.indexOf('GMT'))
    setDateNow(sliced)
  }, [])
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
        <h4 className='text-center my-2 lead'>Today is {dateNow}</h4>
        <Form />
      </Container>
    </CreatePageWrapper>
  )
}

export default CreatePage
