import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  TABLET_MAX_WIDTH_PLUS_1,
  TABLET_MAX_WIDTH,
} from '../styles/GlobalStyles'

import instagram24px from '../assets/images/icons-and-logos/social/instagram-24-px.svg'
import twitter24px from '../assets/images/icons-and-logos/social/twitter-24-px.svg'
import pinterest24px from '../assets/images/icons-and-logos/social/pinterest-24-px.svg'
import gmail24px from '../assets/images/icons-and-logos/social/gmail-24-px.svg'

export default function Footer() {
  return (
    <FooterStyles>
      <a
        title="instagram"
        href="https://www.instagram.com/books.buns/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={instagram24px}
          alt="Instagram"
          style={{ width: '1.5em', height: '1.5em' }}
        />
      </a>
      <a
        title="twitter"
        href="https://twitter.com/Bee84501167"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={twitter24px}
          alt="Twitter"
          style={{ width: '1.5em', height: '1.5em' }}
        />
      </a>
      <a
        title="pinterest"
        href="https://www.pinterest.com/booksbunsco/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={pinterest24px}
          alt="Pinterest"
          style={{ width: '1.5em', height: '1.5em' }}
        />
      </a>
      <Link to={`/connect`}>
        <img
          src={gmail24px}
          alt="Email"
          style={{ width: '1.5em', height: '1.5em' }}
        />
      </Link>
      <FontCredit>
        Font made from{' '}
        <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> is licensed
        by CC BY 3.0
      </FontCredit>
    </FooterStyles>
  )
}

const FooterStyles = styled.footer`
  width: 100%;
  min-height: var(--footer-height);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid var(--border-color) 1px;
  position: relative;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_MAX_WIDTH}) {
    margin-bottom: 64px;
  }

  a {
    margin: 8px;
  }
`

const FontCredit = styled.div`
  position: absolute;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_MAX_WIDTH_PLUS_1}) {
    bottom: 8px;
    right: 8px;
  }

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_MAX_WIDTH}) {
    bottom: -16px;
    font-size: 0.8em;
    justify-content: center;
  }
`
