import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// Assets
import logo from '../../Assets/SVG/logo.svg'
const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #009081;
  color: white;
  text-align: center;
`
const About = () => {
  return (
    <AboutWrapper>
      <div className='col-5'>
        <img
          className='mb-4'
          src={logo}
          style={{ width: '13rem' }}
          alt='logo'
        />
        {/* <h1>About Page</h1> */}
        <p className='mb-4'>
          Hello, I am Philcob, a Full-stack developer who initiated and pushed
          this idea into real life. I wanted to create my own diary application
          but it turned out to be be a useful web application to everyone that's
          why I decided to publish this online and let you guys use it!
        </p>
        <Link className='text-white font-weight-bold border px-3 py-1 ' to='/'>
          Go back
        </Link>
      </div>
    </AboutWrapper>
  )
}

export default About
