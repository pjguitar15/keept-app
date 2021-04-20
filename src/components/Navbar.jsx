import React from 'react'
import styled from 'styled-components'

// assets
import logo from '../Assets/SVG/logo.svg'

const StyledNav = styled.div`
  position: relative;
`

const Navbar = () => {
  return (
    <StyledNav className='p-4 '>
      <img src={logo} style={{ width: '7rem' }} alt='logo' />
    </StyledNav>
  )
}

export default Navbar
