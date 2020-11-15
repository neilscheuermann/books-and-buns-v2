import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Footer from './Footer'
// import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Typography />
      <GlobalStyles />
      {/* <Navbar /> */}
      <ContentStyled>{children}</ContentStyled>
      <Footer />
    </div>
  )
}

const ContentStyled = styled.div`
  margin-bottom: 24px;

  ${/* Mobile or Tablet */ ''}
  @media (max-width: var(--tablet-max-width)) {
    margin-top: var(--header-height-mobile);
  }
`
