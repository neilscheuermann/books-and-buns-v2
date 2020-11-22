import React from 'react'
import styled from 'styled-components'
// Want to remove my sass file during Nav refactor
// also remove `bulma`, `node-sass`, and `gatsby-plugin-sass`
import '../styles/all.sass'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Footer from './Footer'
import Navbar from './Navbar'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function Layout({ children }) {
  return (
    <div>
      <Typography />
      <GlobalStyles />
      <ViewPortStyles>
        <Navbar />
        <ContentStyles>{children}</ContentStyles>
        <Footer />
      </ViewPortStyles>
    </div>
  )
}

const ViewPortStyles = styled.div`
  // In place to stretch nav and footer when content doesn't fill the screen
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const ContentStyles = styled.div`
  margin-top: var(--header-height);

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: var(--header-height-mobile);
  }
`
