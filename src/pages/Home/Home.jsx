import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
// assets
import landingfull from '../../Assets/SVG/landingfull.svg'
import landinglarge from '../../Assets/SVG/landinglarge.svg'
import landingmedium from '../../Assets/SVG/landingmedium.svg'
import landingxs from '../../Assets/SVG/landingxs.svg'

// components
import Navbar from '../../components/Navbar.jsx'
import { PrimaryButton, SecondaryButton } from '../../components/Button.jsx'
import Footer from '../../components/Footer.jsx'
// section
import TriColumn from './TriColumn.jsx'
import Soon from './Soon.jsx'

const LandingBG = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 2000px;
  margin: auto;
  z-index: -1;
`
const Jumbotron = styled.div`
  padding: 4rem 0;
`
const BigText = styled.div`
  font-size: 50px;
`

const Home = () => {
  const history = useHistory()
  return (
    <div>
      <Navbar />
      <div>
        {/* Responsive SVG Background */}
        <LandingBG
          className='d-none d-xl-block'
          src={landingfull}
          alt='navsvg'
        />
        <LandingBG
          className='d-none d-lg-block d-xl-none'
          src={landinglarge}
          alt='navsvg'
        />
        <LandingBG
          className='d-none d-md-block d-lg-none'
          src={landingmedium}
          alt='navsvg'
        />
        <LandingBG
          style={{ top: '0', right: '-1rem' }}
          className='d-xs-none d-sm-block d-md-none'
          src={landingxs}
          alt='navsvg'
        />

        {/* Responsive SVG Background */}
        <Container className='position-relative'>
          <Jumbotron>
            <BigText className='main-header-text text-white text-center'>
              Keep your Memories Private
            </BigText>
            <p className='text-center lead text-white col-9 mx-auto'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              consequuntur voluptas aspernatur repellat aliquam voluptatem dolor
              optio, quae rem hic?
            </p>
            <div className='mt-5 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-8 mx-auto d-flex justify-content-center align-items-center'>
              <PrimaryButton
                onClick={() => history.push('/diary')}
                className='my-btn mx-2'
              >
                WRITE NOW
              </PrimaryButton>
              <SecondaryButton
                onClick={() => history.push('/about')}
                className='my-btn mx-2'
              >
                ABOUT US
              </SecondaryButton>
            </div>
          </Jumbotron>
        </Container>
      </div>
      <TriColumn />
      <Soon />
      <Footer />
    </div>
  )
}

export default Home
