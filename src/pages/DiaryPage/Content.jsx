import React from 'react'
import styled from 'styled-components'
const ContentWrapper = styled.div`
  padding: 5rem;
`
const HeaderText = styled.h2`
  color: white;
  background: #009081;
  padding: 10px 30px;
`
const MainContent = styled.p`
  margin-top: 3rem;
`
const Content = () => {
  return (
    <ContentWrapper>
      <HeaderText className='main-header-text col-6'>My New Year</HeaderText>
      <p>Philcob</p>
      <MainContent>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolorem obcaecati enim deleniti vitae odit minima nobis, odio a omnis
          et deserunt quos illo, error, exercitationem nulla iure quo soluta!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolorem obcaecati enim deleniti vitae odit minima nobis, odio a omnis
          et deserunt quos illo, error, exercitationem nulla iure quo soluta!
        </p>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolorem obcaecati enim deleniti vitae odit minima nobis, odio a omnis
          et deserunt quos illo, error, exercitationem nulla iure quo soluta!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolorem obcaecati enim deleniti vitae odit minima nobis, odio a omnis
          et deserunt quos illo, error, exercitationem nulla iure quo soluta!
          dolorem obcaecati enim deleniti vitae odit minima nobis, odio a omnis
          et deserunt quos illo, error, exercitationem nulla iure quo soluta!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolorem obcaecati enim deleniti vitae odit minima nobis, odio a omnis
          et deserunt quos illo, error, exercitationem nulla iure quo soluta!
        </p>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolorem obcaecati enim deleniti vitae odit minima nobis, odio a omnis
          et deserunt quos illo, error, exercitationem nulla iure quo soluta!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolorem obcaecati enim deleniti vitae odit minima nobis, odio a omnis
          et deserunt quos illo, error, exercitationem nulla iure quo soluta!
        </p>
      </MainContent>
    </ContentWrapper>
  )
}

export default Content
