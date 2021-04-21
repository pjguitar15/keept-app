import React from 'react'
import { Container } from 'react-bootstrap'
// Assets
import footerbg from '../Assets/SVG/footerbg.svg'
import logo from '../Assets/SVG/logo.svg'
import facebook from '../Assets/SVG/facebook.svg'
import instagram from '../Assets/SVG/instagram.svg'
import twitter from '../Assets/SVG/twitter.svg'
const Footer = () => {
  return (
    <div
      style={{
        height: '19rem',
        background: '#f2f2f2',
        zIndex: '-1'
      }}
      className='position-relative'
    >
      <img
        className='position-absolute'
        style={{ bottom: '0', zIndex: '-1', width: '100%' }}
        src={footerbg}
        alt='footerbg'
      />
      <Container className='position-relative'>
        <img
          className='position-absolute'
          style={{ width: '7rem', left: '2rem', bottom: '0' }}
          src={logo}
          alt='logo'
        />

        <div
          className='position-absolute text-white'
          style={{ bottom: '0', height: '8rem', left: '2rem' }}
        >
          <img
            style={{ width: '1.5rem' }}
            className='mr-3'
            src={facebook}
            alt='facebook'
          />
          <img
            style={{ width: '1.5rem' }}
            className='mx-3'
            src={instagram}
            alt='instagram'
          />
          <img
            style={{ width: '1.5rem' }}
            className='mx-3'
            src={twitter}
            alt='twitter'
          />
        </div>
      </Container>
    </div>
  )
}

export default Footer
