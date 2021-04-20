import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// Assets
import privacy from '../../Assets/SVG/folder.svg'
import workspace from '../../Assets/SVG/workspace.svg'
import color from '../../Assets/SVG/color-scheme.svg'
const TriColumn = () => {
  return (
    <Container style={{ padding: '15rem 0', marginTop: '30rem' }}>
      <Row>
        <Col lg='4' md='6' xs='12' className='text-center'>
          <div className='col-4 mx-auto mb-3'>
            <img src={privacy} alt='privacy' />
          </div>
          <h2 className='main-header-text'>Privacy</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint iste
            inventore dignissimos recusandae? Modi sed provident tempora ex?
            Quod, molestias.
          </p>
        </Col>
        <Col lg='4' md='6' xs='12' className='text-center'>
          <div className='col-4 mx-auto mb-3'>
            <img style={{ width: '100%' }} src={workspace} alt='privacy' />
          </div>
          <h2 className='main-header-text'>Write Anywhere</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint iste
            inventore dignissimos recusandae? Modi sed provident tempora ex?
            Quod, molestias.
          </p>
        </Col>
        <Col lg='4' md='6' xs='12' className='text-center'>
          <div className='col-4 mx-auto mb-3'>
            <img style={{ width: '100%' }} src={color} alt='privacy' />
          </div>
          <h2 className='main-header-text'>Customizable</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint iste
            inventore dignissimos recusandae? Modi sed provident tempora ex?
            Quod, molestias.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default TriColumn
