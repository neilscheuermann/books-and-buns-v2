// Pulled in custom font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni

// NOTE: You must credit the author Copy this link on your web
// See License.txt in the noteworthy-light folder
// <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
// OR
//
// <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>

import { createGlobalStyle } from 'styled-components'

import twCenMediumRegularWoff from '../assets/fonts/tw-cen-medium-regular/tw-cen-medium-regular.woff'
import twCenMediumRegularWoff2 from '../assets/fonts/tw-cen-medium-regular/tw-cen-medium-regular.woff2'

import { MOBILE_MAX_WIDTH } from './GlobalStyles'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Tw Cen Medium Regular';
    src: local('Tw Cen Medium Regular'), local('TwCenMediumRegular'),
    url(${twCenMediumRegularWoff2}) format('woff2'),
    url(${twCenMediumRegularWoff}) format('woff');
    font-style: normal;
  }

  html {
    font-family: 'Tw Cen Medium Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black-gray);
  }

  // These font-size and line-heights are set mostly from this article
  // https://www.impactplus.com/blog/best-font-size-for-website
  body {
    font-size: 1em; // html is default 16px, so 1em here will set em references below to that value
    line-height: 1.375em;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      line-height: 1.25em;
    }
  }

  h1 {
    font-size: 3em; 
    line-height: 1.05em;
    font-weight: 500;
    margin: 0;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: 2em; 
      line-height: 1.25em;
    }
  }

  h2 {
    font-size: 2.25em; 
    line-height: 1.25em;
    font-weight: 500;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: 1.625em; 
      line-height: 1.15em;
    }
  }

  h3 {
    font-size: 1.75em; 
    line-height: 1.25em;
    font-weight: 500;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: 1.375em; 
      line-height: 1.14em;
    }
  }

  h4 {
    font-size: 1.5em; 
    line-height: 1.22em;
    font-weight: 500;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: 1.125em; 
      line-height: 1.11em;
    }
  }

  p {
    font-size: 1.3125em; // 21px with 16px as the default
    font-weight: 400;
    line-height: 1.5em;
    margin: 1em 0;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: 1.125em; // 18px with 16px as the default
    }
  }

  li {
    font-size: 1.3em;
    line-height: 1.4em;
  }

  blockquote {
    font-size: 1.5em; 
    line-height: 1.46em;
    border-left: solid var(--orange) 15px;
    padding: 8px 1em;

    p {
      margin: 0;
      font-size: inherit; 
    }

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: 1.25em; 
      line-height: 1.25em;
    }
  }
`

export default Typography
