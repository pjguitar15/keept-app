import React from 'react'
import styled from 'styled-components'
import roundshape from '../../Assets/SVG/landingxs.svg'
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
  return (
    <ContentWrapper>
      <img
        style={{
          zIndex: '-1',
          top: '-105rem',
          width: '80rem',
          margin: 'auto',
          left: '0',
          right: '0'
        }}
        className='position-absolute'
        src={roundshape}
        alt='landingfull'
      />
      <div className='p-5'>
        <HeaderText className='main-header-text text-white text-center m-0'>
          My New Year
        </HeaderText>
        <p className='text-secondary m-0 p-0'>Philcob Josol</p>
        <p className='text-secondary m-0 p-0'>January 1, 2021</p>
        <MainContent>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorem obcaecati enim deleniti vitae odit minima nobis, odio a
            omnis et deserunt quos illo, error, exercitationem nulla iure quo
            soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dolorem obcaecati enim deleniti vitae odit minima nobis,
            odio a omnis et deserunt quos illo, error, exercitationem nulla iure
            quo soluta!
          </p>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorem obcaecati enim deleniti vitae odit minima nobis, odio a
            omnis et deserunt quos illo, error, exercitationem nulla iure quo
            soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dolorem obcaecati enim deleniti vitae odit minima nobis,
            odio a omnis et deserunt quos illo, error, exercitationem nulla iure
            quo soluta! dolorem obcaecati enim deleniti vitae odit minima nobis,
            odio a omnis et deserunt quos illo, error, exercitationem nulla iure
            quo soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dolorem obcaecati enim deleniti vitae odit minima nobis,
            odio a omnis et deserunt quos illo, error, exercitationem nulla iure
            quo soluta!
          </p>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorem obcaecati enim deleniti vitae odit minima nobis, odio a
            omnis et deserunt quos illo, error, exercitationem nulla iure quo
            soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dolorem obcaecati enim deleniti vitae odit minima nobis,
            odio a omnis et deserunt quos illo, error, exercitationem nulla iure
            quo soluta!
          </p>
        </MainContent>
      </div>
    </ContentWrapper>
  )
}

export default Content
