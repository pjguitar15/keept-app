import React, { useContext, useState } from 'react'
import { DiaryData } from '../../context/CRUD'
import {
  Card,
  Col,
  Row,
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
const ViewAll = () => {
  const [data] = useContext(DiaryData)
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()
  return (
    <div>
      <InputGroup className='mb-3 col-5 p-0'>
        <FormControl
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder='Search for an item...'
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
        />
      </InputGroup>
      <Row>
        {data
          .filter(
            item =>
              item.content.includes(searchValue) ||
              item.name.includes(searchValue)
          )
          .map((item, index) => (
            <Col className='p-3' xl='4' lg='6' xs='12' key={index}>
              <Card>
                <Card.Header
                  className='text-white'
                  style={{ background: '#009081' }}
                >
                  <Card.Title className='m-0 p-0'>{item.title}</Card.Title>
                </Card.Header>
                <Card.Body className='text-secondary'>
                  <Card.Text>{item.name}</Card.Text>
                  <div>
                    {item.content.slice(0, 200)}
                    <span>...</span>
                  </div>
                  <Button
                    onClick={() => history.push(`/diary/view/${item._id}`)}
                    size='sm'
                    variant='outline-info mt-4'
                  >
                    View Diary
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default ViewAll
