import React from 'react'
import styled from 'styled-components'

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
      <div className='p-5'>
        <HeaderText className='main-header-text text-center m-0'>
          My New Year
        </HeaderText>
        <MainContent className='shadow p-5 col-10 mx-auto'>
          <p className='text-secondary m-0 p-0'>Philcob Josol</p>
          <p className='text-secondary m-0 p-0'>January 1, 2021</p>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorem obcaecati enim deleniti vitae odit minima nobis, odio a
            omnis et deserunt quos illo, error, exercitationem nulla iure quo
            soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dolorem obcaecati enim deleniti vitae odit minima nobis,
            odio a omnis et deserunt quos illo, error, exercitationem nulla iure
            quo soluta!
          </p>
          <p>
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
          <p>
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
