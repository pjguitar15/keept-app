import React, { useContext } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { DiaryData } from '../../context/CRUD'
import welcome from '../../Assets/SVG/welcome.svg'
import ViewAll from './ViewAll.jsx'
import { useSpring, animated } from 'react-spring'
const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
`
const HeaderText = styled.h3`
  padding: 10px 0;
`
const MainContent = styled.p`
  margin-top: 3rem;
`
const Content = () => {
  const { param } = useParams()
  const [data] = useContext(DiaryData)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200
  })
  return (
    <ContentWrapper>
      <div className='p-5'>
        {param === 'view-all' && <ViewAll />}
        {!param && (
          <animated.div style={props}>
            <div className='mx-auto col-4'>
              <img className='mt-5 w-100' src={welcome} alt='welcome' />
            </div>
            <h1 className='display-4 text-secondary text-center'>
              Nice to see you!
            </h1>
            <p className='text-center lead text-secondary col-5 mx-auto'>
              Please click on the "New Diary" button on the left sidebar to
              create a new diary entry.
            </p>
          </animated.div>
        )}
        {data
          .filter(item => item._id === param)
          .map((item, index) => (
            <div key={index}>
              <animated.div style={props}>
                <HeaderText className='main-header-text text-center m-0'>
                  {item.title}
                </HeaderText>
                <MainContent className='shadow p-5 col-lg-10 mx-auto'>
                  <p className='text-secondary m-0 p-0'>{item.title}</p>
                  <p className='text-secondary m-0 p-0'>{item.name}</p>

                  <p style={{ lineHeight: '40px' }}>{item.content}</p>
                </MainContent>
              </animated.div>
            </div>
          ))}
      </div>
    </ContentWrapper>
  )
}

export default Content
