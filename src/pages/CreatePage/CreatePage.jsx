import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// components
import Sidebar from '../../components/Sidebar.jsx'
import Form from './Form.jsx'
const CreatePage = () => {
  return (
    <div>
      <Row className='m-0 p-0'>
        <Col className='p-0 m-0' xl='3' lg='3' md='4' sm='12' xs='12'>
          <Sidebar />
        </Col>
        <Col className='p-0 m-0' xl='9' lg='9' md='8' sm='12' xs='12'>
          <Form />
        </Col>
      </Row>
    </div>
  )
}

export default CreatePage
