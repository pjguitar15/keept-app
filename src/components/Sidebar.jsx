import React from 'react'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// Assets
import greenlogo from '../Assets/SVG/logogreen.svg'

const SidebarWrapper = styled.div`
  height: 100vh;
  background: #f2f2f2;
`
const NewEntryStyle = styled.div`
  background: #009081;
  color: white;
  padding: 1rem 3rem;
  font-size: 20px;
  font-weight: 200;
  cursor: pointer;
  transition: background 100ms ease-in-out;
  &:hover {
    background: #00b3a1;
  }
`
const ListItem = styled.div`
  background: white;
  padding: 20px;
  cursor: pointer;
  transition: box-shadow 200ms ease-in-out;
  margin-bottom: 12px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`
const Sidebar = () => {
  return (
    <SidebarWrapper className='m-0'>
      <img
        style={{ width: '8rem', margin: '2rem' }}
        src={greenlogo}
        alt='greenlogo'
      />

      <Link className='d-flex ml-4 font-weight-bold' to='/'>
        Back
      </Link>

      <NewEntryStyle className='mt-5 mb-3'>
        <i className='far fa-plus-square mr-2'></i>New Entry
      </NewEntryStyle>
      <Form className='p-2 mb-3'>
        <Form.Control placeholder='Search' />
      </Form>
      <ListItem>
        <h5 className='m-0'>Diary 1</h5>
        <div style={{ fontSize: '14px' }} className='text-secondary mt-1'>
          January 1, 2021
        </div>
        <div className='lead' style={{ fontSize: '14px' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          error!
        </div>
      </ListItem>
      <ListItem>
        <h5 className='m-0'>Diary 1</h5>
        <div style={{ fontSize: '14px' }} className='text-secondary mt-1'>
          January 1, 2021
        </div>
        <div className='lead' style={{ fontSize: '14px' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          error!
        </div>
      </ListItem>
      <ListItem>
        <h5 className='m-0'>Diary 1</h5>
        <div style={{ fontSize: '14px' }} className='text-secondary mt-1'>
          January 1, 2021
        </div>
        <div className='lead' style={{ fontSize: '14px' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          error!
        </div>
      </ListItem>
      <ListItem>
        <h5 className='m-0'>Diary 1</h5>
        <div style={{ fontSize: '14px' }} className='text-secondary mt-1'>
          January 1, 2021
        </div>
        <div className='lead' style={{ fontSize: '14px' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          error!
        </div>
      </ListItem>
    </SidebarWrapper>
  )
}

export default Sidebar