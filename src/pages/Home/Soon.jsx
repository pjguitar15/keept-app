import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
// Assets
import phoneimg from '../../Assets/smartphone.png'
const SoonWrapper = styled.div`
  background: #f2f2f2;
  padding: 15rem 0;
`
const Soon = () => {
  return (
    <SoonWrapper>
      <Container>
        <Row>
          <Col md='6' xs='12'>
            <h1 className='main-header-text'>Soon on Mobile</h1>
            <p className='col-10 p-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              odio incidunt molestias assumenda veritatis ut. Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </Col>
          <Col md='6' xs='12'>
            <img style={{ width: '100%' }} src={phoneimg} alt='phoneimg' />
          </Col>
        </Row>
      </Container>
    </SoonWrapper>
  )
}

export default Soon
