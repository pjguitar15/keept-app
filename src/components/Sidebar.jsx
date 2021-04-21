import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
// Assets
import greenlogo from '../Assets/SVG/logogreen.svg'
// context
import { DiaryData } from '../context/CRUD'

const SidebarWrapper = styled.div`
  height: 100vh;
  background: #f2f2f2;
`
const NewEntryStyle = styled.div`
  background: #009081;
  color: white;
  padding: 0.5rem 3rem;
  font-weight: 600;
  font-size: 16px;
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
  const [data] = useContext(DiaryData)
  const history = useHistory()
  const newEntryClicked = () => {
    history.push('/diary/create')
  }
  const listItemClicked = item => {
    history.push(`/diary/view/${item._id}`)
  }
  return (
    <SidebarWrapper className='m-0 shadow'>
      <img
        style={{ width: '8rem', margin: '2rem' }}
        src={greenlogo}
        alt='greenlogo'
      />

      <Link className='d-flex ml-4 font-weight-bold' to='/'>
        Back to Home
      </Link>

      <NewEntryStyle onClick={newEntryClicked} className='mt-3 mb-3'>
        <i className='far fa-plus-square mr-2'></i>New Diary
      </NewEntryStyle>

      <ListItem onClick={() => history.push('/diary')}>
        <h4 style={{ color: '#009081' }} className='m-0 p-0 text-center'>
          Welcome
        </h4>
      </ListItem>
      {data
        .slice(0, 4)
        .map((item, index) => (
          <ListItem onClick={() => listItemClicked(item)} key={index}>
            <h6 className='m-0'>{item.title}</h6>
            <div style={{ fontSize: '14px' }} className='text-secondary mt-1'>
              {item.name}
            </div>
            <div className='lead' style={{ fontSize: '14px' }}>
              {item.content.slice(0, 120)}
              {item.content.length > 100 && (
                <span className='text-primary font-weight-bold'>
                  ... see more
                </span>
              )}
            </div>
          </ListItem>
        ))
        .reverse()}

      <Link className='ml-4' to='/diary/view/view-all'>
        {data.length > 4 && <> There are {data.length - 3} more </>}
        View All
      </Link>
    </SidebarWrapper>
  )
}

export default Sidebar
