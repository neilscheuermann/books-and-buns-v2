import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
// import './all.sass'
import useReactResponsive from '../hooks/useReactResponsive'
import GlobalStyles from '../styles/GlobalStyles'
import GlobalFonts from '../fonts/fonts'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_MOBILE,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MAX_PLUS_1,
} from '../constants'

const MAX_WIDTH_INT = 1336

export default function Layout({ children, pathname }) {
  const { title, description } = useSiteMetadata()
  const { isMobile } = useReactResponsive()

  return (
    <div>
      <GlobalFonts />
      <GlobalStyles />
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <Navbar pathname={pathname} />
        {/* ===== ICON ===== */}
        {!isMobile && <NavDividerDots />}
        {/* ========== */}
        <div>
          <ContentStyled>{children}</ContentStyled>
        </div>
        {false && <Example />}
        <Footer />
      </div>
    </div>
  )
}

const NavDividerDots = () => (
  <>
    <i
      className="icon-circle"
      style={{
        position: 'fixed',
        left: 'calc(50% - 32px)',
        top: '88px',
        zIndex: 100,
      }}
    />
    <i
      className="icon-circle"
      style={{
        position: 'fixed',
        left: '50%',
        top: '88px',
        zIndex: 100,
      }}
    />
    <i
      className="icon-circle"
      style={{
        position: 'fixed',
        left: 'calc(50% + 32px)',
        top: '88px',
        zIndex: 100,
      }}
    />
  </>
)

const ContentStyled = styled.div`
  margin-bottom: 24px;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    ${/* Set max width and center */ ''}
    margin-top: ${HEADER_HEIGHT};
    margin-left: auto;
    margin-right: auto;
    max-width: ${MAX_WIDTH_INT}px;
  }
  ${/* Mobile or Tablet */ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin-top: ${HEADER_HEIGHT_MOBILE};
  }

  ${/* To always give some margin */ ''}
  @media (max-width: ${MAX_WIDTH_INT + 16}px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`
