import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import bnbLogoWhite from '../assets/images/icons-and-logos/bnb-logo-white-40px.svg'
import bnbLogoWhiteSmall from '../assets/images/icons-and-logos/bnb-logo-white-30px.svg'
import useReactResponsive from '../hooks/useReactResponsive'
import { WEB_MIN_WIDTH, MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function Navbar() {
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
          <ItemsWrapperStyles
            className={isMobileTemp ? 'navbar-start has-text-centered' : ''}
          >
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/podcasts">
              Podcasts
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/connect">
              Connect
            </Link>
          </ItemsWrapperStyles>
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

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    height: var(--header-height-mobile);
  }
`

const LogoText = styled.div`
  color: white;
  font-size: 40px;
  display: flex;
  align-items: center;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 25px;
  }
`

const NavbarContentWrapper = styled.div`
  height: inherit;

  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
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

const ItemsWrapperStyles = styled.div`
  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
    display: flex;
  }

  a {
    color: white;
    margin: 0 8px;
    font-size: 1.5rem;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      margin: 6px;
    }

    &:hover {
      color: black;
    }

    &[aria-current='page'] {
      font-size: 1.7rem;
      font-weight: 900;

      @media (max-width: ${MOBILE_MAX_WIDTH}) {
        border-bottom: 2px solid white;
      }
    }
  }
`

const NavMenu = styled.div`
  @media only screen and (min-width: ${WEB_MIN_WIDTH}) {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    background-color: var(--border-color);
  }
`
