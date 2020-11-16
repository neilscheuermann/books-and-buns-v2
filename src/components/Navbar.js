import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import bnbLogoWhite from '../assets/images/icons-and-logos/bnb-logo-white-40px.svg'
import bnbLogoWhiteSmall from '../assets/images/icons-and-logos/bnb-logo-white-30px.svg'
import useReactResponsive from '../hooks/useReactResponsive'
import {
  TABLET_MAX_WIDTH_PLUS_1,
  TABLET_MAX_WIDTH,
} from '../styles/GlobalStyles'

const NavItem = ({ to, children, pathname }) => {
  const selected = pathname ? pathname.toLowerCase() === to : false

  return (
    <StyledLink className="navbar-item" to={to}>
      <NavItemText selected={selected}>{children}</NavItemText>
    </StyledLink>
  )
}

export default function Navbar({ pathname }) {
  const [navBarActiveClass, setNavBarActiveClass] = useState('')
  const [hamburgerActive, setHamburgerActive] = useState(false)
  const { isMobile } = useReactResponsive()
  const [isMobileTemp, setIsMobileTemp] = useState('')
  useEffect(() => {
    setIsMobileTemp(isMobile)
  }, [isMobile])
  useEffect(() => {
    hamburgerActive ? setNavBarActiveClass('is-active') : setNavBarActiveClass()
  }, [hamburgerActive])

  const toggleHamburger = () => {
    setHamburgerActive(!hamburgerActive)
  }

  return (
    <NavStyles
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <NavbarContentWrapper className="container">
        <NavbarBrandStyled className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              src={isMobileTemp ? bnbLogoWhiteSmall : bnbLogoWhite}
              alt="BooksAndBuns"
              // Make sure max-height is none to respect the changes to width and height in logo svg
              // Had to do inline style due to bulma styling
              style={{
                maxHeight: 'none',
                margin: '0 8px',
              }}
            />
            <LogoText>BOOKS AND BUNS</LogoText>
          </Link>

          {/*                */}
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
            style={{
              marginRight: '16px',
              color: 'white',
            }}
          >
            <span />
            <span />
            <span />
          </div>
          {/* ------------ */}
          {/*              */}
        </NavbarBrandStyled>
        <NavMenu id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <NavItemsWrapper
            className={isMobileTemp ? 'navbar-start has-text-centered' : ''}
          >
            <NavItem pathname={pathname} to="/">
              Home
            </NavItem>
            <NavItem pathname={pathname} to="/editing">
              Editing
            </NavItem>
            <NavItem pathname={pathname} to="/podcasts">
              Podcasts
            </NavItem>
            <NavItem pathname={pathname} to="/blog">
              Blog
            </NavItem>
            <NavItem pathname={pathname} to="/connect">
              Connect
            </NavItem>
            {/* <NavItem pathname={pathname} to="/contact/examples">Form Examples</NavItem> */}
          </NavItemsWrapper>
        </NavMenu>
      </NavbarContentWrapper>
    </NavStyles>
  )
}

const NavStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--orange);
  border-bottom: solid var(--border-color) 1px;

  ${/* Mobile or Tablet */ ''}
  @media (max-width: ${TABLET_MAX_WIDTH}) {
    height: var(--header-height-mobile);
  }
`

const LogoText = styled.div`
  color: white;
  font-size: 40px;
  display: flex;
  align-items: center;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_MAX_WIDTH}) {
    font-size: 30px;
  }
`

const NavbarContentWrapper = styled.div`
  height: inherit;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
    min-height: 3.25rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
const NavbarBrandStyled = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
`

const NavItemsWrapper = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
    display: flex;
  }
`

const StyledLink = styled((props) => <Link {...props} />)`
  color: white;
  margin: 0 8px;
`

const NavMenu = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
    display: flex;
    justify-content: flex-end;
  }

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_MAX_WIDTH}) {
    background-color: var(--border-color);
  }
`

const NavItemText = styled.p`
  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_MAX_WIDTH}) {
    margin: 6px;
  }

  ${StyledLink}:hover {
    color: black;
  }

  ${({ selected }) =>
    selected &&
    `
      font-size: 1.7em;
      font-weight: 900;
      display: inline-block;
      border-bottom: 2px solid white;

      ${/* Web */ ''}
      @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
        border-bottom: 2px solid var(--border-color);
      }
    `}
`
